const winston = require('winston')
const rp = require('request-promise')
const API_URL = process.env.API_URL || 'http://localhost:9580/'
if (!API_URL.endsWith('/')) {
  throw new Error('API_URL environment variable must end with a /')
}
let users = []

function defaultRequestOptions (user, path, method = 'GET', qs = {}) {
  if (path.startsWith('/')) {
    path = path.substring(1)
  }

  let uri = path.startsWith('http') ? path : API_URL + path

  return {
    method: method,
    uri: uri,
    qs: qs,
    auth: {
      user: user.username,
      pass: user.password,
      sendImmediately: true
    },
    json: true
  }
}

let self = module.exports = {
  getUser: function (userNumber) {
    if (userNumber < 1 || userNumber > users.length) {
      throw new Error(`Unable to find user with number ${userNumber}`)
    }
    return users[userNumber - 1]
  },

  deleteAllUserSubmissions: async function (season) {
    for (let user of users) {
      winston.info(`Clearing existing ${season} submission data for ${user.username}`)
      await self.deleteSubmission(user, season)
    }
  },
  deleteSubmission: async function (user, season) {
    let sub = await self.getSubmission(user, season)
    if (sub && sub._links.self.href) {
      const requestObject = defaultRequestOptions(user, sub._links.self.href, 'DELETE')
      try {
        await rp(requestObject)
        return true
      } catch (e) {
        winston.error(`Error deleting ${season} submission for username=${user.username} and password=${user.password}`, e)
        throw e
      }
    }
  },

  getSubmission: async function (user, season) {
    const requestObject = defaultRequestOptions(user, '/api/submissions/search/getByContactIdAndSeason', 'GET', {
      'contact_id': user.contactId,
      'season': season
    })
    try {
      return await rp(requestObject)
    } catch (e) {
      if (e.statusCode === 404) {
        return null
      }
      winston.error(`Error finding submissions contact id ${user.contactId} with username=${user.username} and password=${user.password}`, e)
      throw e
    }
  },

  getContactId: async function (user) {
    const requestObject = defaultRequestOptions(user, `/api/licence/${user.username}`)
    try {
      let result = await rp(requestObject)
      return result.contact.id
    } catch (e) {
      winston.error(`Error fetching contact detail for with username=${user.username} and password=${user.password}`, e)
      throw e
    }
  }
};

(async function () {
  users = []
  let i = 0
  let found = true

  while (found && ++i) {
    let username = process.env[`RCR_USER${i}_USERNAME`]
    let password = process.env[`RCR_USER${i}_PASSWORD`]
    found = !!username && !!password

    if (found) {
      let user = {
        username: username.trim(),
        password: password.trim(),
        contactId: null
      }
      user.contactId = await self.getContactId(user)
      users.push(user)
      winston.info(`Adding user ${i} with username=${username} and password=${password}`)
    }
  }
})()
