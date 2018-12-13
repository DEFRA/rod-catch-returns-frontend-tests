'use strict'
const { logger } = require('defra-logging-facade')
const rp = require('request-promise')
const API_URL = process.env.API_URL || 'http://localhost:9580/'

if (!API_URL.endsWith('/')) {
  throw new Error('API_URL environment variable must end with a /')
}

function defaultRequestOptions (user, path, method = 'GET', qs = {}) {
  if (path.startsWith('/')) {
    path = path.substring(1)
  }
  let uri = path.startsWith('http') ? path : API_URL + path
  return {
    method: method,
    uri: uri,
    qs: qs,
    json: true
  }
}

async function readUsersFromEnvironment (userCallback, userType = 'USER') {
  logger.debug('Loading users from environment')
  let i = 0
  let found = true

  while (found && ++i) {
    let username = process.env[`RCR_${userType}${i}_USERNAME`]
    let password = process.env[`RCR_${userType}${i}_PASSWORD`]
    found = !!username && !!password

    if (found) {
      let user = {
        username: username.trim(),
        password: password.trim(),
        contactId: null
      }
      await userCallback(user)
    }
  }
}

let self = module.exports = {
  users: [],
  admins: [],
  initialise: async function () {
    await readUsersFromEnvironment(async (user) => {
      user.contactId = await self.getContactId(user)
      self.users.push(user)
    }, 'USER')
    await readUsersFromEnvironment(async (user) => {
      self.admins.push(user)
    }, 'ADMIN')
  },
  getUser: function (userNumber) {
    if (userNumber < 1 || userNumber > self.users.length) {
      throw new Error(`Unable to find user with number ${userNumber}`)
    }
    return self.users[userNumber - 1]
  },
  getAdmin: function (adminNumber) {
    if (adminNumber < 1 || adminNumber > self.admins.length) {
      throw new Error(`Unable to find user with number ${adminNumber}`)
    }
    return self.admins[adminNumber - 1]
  },

  deleteAllUserSubmissions: async function (season) {
    logger.debug(`Clearing all submission data for ${season}`)
    for (let user of self.users) {
      await self.deleteSubmission(user, season)
    }
  },
  deleteSubmission: async function (user, season) {
    logger.debug(`Clearing existing ${season} submission data for ${user.username}`)
    let sub = await self.getSubmission(user, season)
    if (sub && sub._links.self.href) {
      const requestObject = defaultRequestOptions(user, sub._links.self.href, 'DELETE')
      try {
        await rp(requestObject)
        return true
      } catch (e) {
        logger.error(`Error deleting ${season} submission for username=${user.username} and password=${user.password}`)
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
      logger.error(`Error finding submissions contact id ${user.contactId} with username=${user.username} and password=${user.password}`)
    }
  },

  getContactId: async function (user) {
    const requestObject = defaultRequestOptions(user, `/api/licence/${user.username}?verification=${user.password}`)
    try {
      let result = await rp(requestObject)
      return result.contact.id
    } catch (e) {
      logger.error(`Error fetching contact detail for with username=${user.username} and password=${user.password}`)
    }
  }
}
