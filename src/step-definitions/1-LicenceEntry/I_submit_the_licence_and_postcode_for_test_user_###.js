'use strict'

const { defineStep } = require('cucumber')
const { logger } = require('defra-logging-facade')

const LicencePage = require('../../pages/Licence-page')

defineStep('I submit the licence and postcode for test user {int}', userNumber => {
  const user = browser.getUser(userNumber)

  logger.debug(`Attempting to login as ${user.username}`)

  LicencePage.submit(user.username, user.password)
})
