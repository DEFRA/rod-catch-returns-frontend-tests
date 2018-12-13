'use strict'
const { defineStep } = require('cucumber')
const AdminLoginPage = require('../../pages/AdminLogin-page')
const { logger } = require('defra-logging-facade')

defineStep(/I submit the username and password for admin user ([1-9][0-9]*)/, (adminNumber) => {
  let user = browser.getAdmin(adminNumber)
  logger.debug(`Attempting to login as administrator ${user.username}`)
  AdminLoginPage.submit(user.username, user.password)
})
