'use strict'

const { defineStep } = require('cucumber')
const { logger } = require('defra-logging-facade')

const AdminLoginPage = require('../../pages/AdminLogin-page')

defineStep('I submit the username and password for admin user {int}', adminNumber => {
  const user = browser.getAdmin(adminNumber)

  logger.debug(`Attempting to login as administrator ${user.username}`)

  AdminLoginPage.submit(user.username, user.password)
})
