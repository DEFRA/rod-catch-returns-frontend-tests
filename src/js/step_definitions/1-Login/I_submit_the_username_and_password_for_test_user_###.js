'use strict'
const { defineStep } = require('cucumber')
const LoginPage = require('../../pages/Login-page')
const { logger } = require('defra-logging-facade')
const userManager = require('../../lib/user-manager')

defineStep(/I submit the username and password for test user ([1-9][0-9]*)/, function (userNumber) {
  let user = userManager.getUser(userNumber)
  logger.info(`Attempting to login as ${user.username}`)
  LoginPage.submitLogin(user.username, user.password)
})
