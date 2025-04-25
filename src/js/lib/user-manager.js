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
  const uri = path.startsWith('http') ? path : API_URL + path
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
    const username = process.env[`RCR_${userType}${i}_USERNAME`]
    const password = process.env[`RCR_${userType}${i}_PASSWORD`]
    found = !!username && !!password

    if (found) {
      const user = {
        username: username.trim(),
        password: password.trim(),
        contactId: null
      }
      await userCallback(user)
    }
  }
}

const self = module.exports = {
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

  deleteAllUserSubmissions: async function () {
    const year = new Date().getFullYear()
    for (const user of self.users) {
      await Promise.all([self.deleteSubmission(user, year), self.deleteSubmission(user, year - 1)])
    }
  },
  deleteSubmission: async function (user, season) {
    logger.debug(`Clearing existing ${season} submission data for ${user.username}`)
    const sub = await self.getSubmission(user, season)
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
      contact_id: user.contactId,
      season: season
    })
    try {
      return await rp(requestObject)
    } catch (e) {
      if (e.statusCode === 404) {
        return null
      }
      logger.error(`Error finding submissions contact id ${user.contactId} with username=${user.username} and password=${user.password}`, e)
    }
  },

  getContactId: async function (user) {
    const requestObject = defaultRequestOptions(user, `/api/licence/${user.username}?verification=${user.password}`)
    try {
      const result = await rp(requestObject)
      return result.contact.id
    } catch (e) {
      logger.error(`Error fetching contact detail for with username=${user.username} and password=${user.password}`, e)
    }
  },

  deleteAllGrilseProbabilities: async function () {
    try {
      const response = await self.getAllGrilseProbabilities()
      const grilseProbabilities = response._embedded.grilseProbabilities

      logger.debug(`Deleting ${grilseProbabilities.length} grilse probabilities`)

      const deletePromises = grilseProbabilities.map(item => {
        const deleteUrl = item._links.self.href
        logger.debug(`Deleting grilse probability at: ${deleteUrl}`)
        return rp(defaultRequestOptions(undefined, deleteUrl, 'DELETE'))
      })

      await Promise.all(deletePromises)
      logger.debug('Successfully deleted all grilse probabilities')
      return true
    } catch (error) {
      logger.error('Failed to delete grilse probabilities', error)
      throw error
    }
  },

  getAllGrilseProbabilities: async function () {
    const requestObject = defaultRequestOptions(undefined, '/api/grilseProbabilities', 'GET')

    return await rp(requestObject)
  }
}
