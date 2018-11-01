'use strict'
const { defineStep } = require('cucumber')
const LoginPage = require('../../pages/Login-page')
const { logger } = require('defra-logging-facade')

defineStep(/I submit the username and password for test user ([1-9][0-9]*)/, (userNumber) => {
  let user = browser.getUser(userNumber)
  logger.debug(`Attempting to login as ${user.username}`)
  LoginPage.submitLogin(user.username, user.password)
})
