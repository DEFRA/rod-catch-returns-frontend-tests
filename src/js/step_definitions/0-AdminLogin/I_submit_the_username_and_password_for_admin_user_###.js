'use strict'
const { defineStep } = require("@cucumber/cucumber")
const AdminLoginPage = require('../../pages/AdminLogin-page')
const { logger } = require('defra-logging-facade')

defineStep(/I submit the username and password for admin user ([1-9][0-9]*)/, (adminNumber) => {
  const user = browser.getAdmin(adminNumber)
  logger.debug(`Attempting to login as administrator ${user.username}`)
  AdminLoginPage.submit(user.username, user.password)
})
