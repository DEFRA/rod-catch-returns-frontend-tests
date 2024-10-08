'use strict'
const { defineStep } = require("@cucumber/cucumber")
const AdminLoginPage = require('../../pages/AdminLogin-page')
const { logger } = require('defra-logging-facade')

defineStep(/I submit the username and password for admin user ([1-9][0-9]*)/, async (adminNumber) => {
  const user = await browser.getAdmin(adminNumber)
  logger.debug(`Attempting to login as administrator ${user.username}`)
  await AdminLoginPage.submit(user.username, user.password)
})
