'use strict'
const { defineStep } = require('cucumber')
const LoginPage = require('../../pages/Licence-page')
const { logger } = require('defra-logging-facade')

defineStep(/I submit the licence and postcode for test user ([1-9][0-9]*)/, (userNumber) => {
  let user = browser.getUser(userNumber)
  logger.debug(`Attempting to login as ${user.username}`)
  LoginPage.submit(user.username, user.password)
})
