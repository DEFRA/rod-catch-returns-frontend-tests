'use strict'
const { defineStep } = require('cucumber')
const AdminLoginPage = require('../../../src/pages/AdminLogin-page')
const LicencePage = require('../../../src/pages/Licence-page')
const { logger } = require('defra-logging-facade')

defineStep(/I am an (external|administrative) user/, function (userType) {
  if (userType === 'administrative') {
    browser.options.baseUrl = 'http://localhost:4000'
    AdminLoginPage.open()
  } else {
    browser.options.baseUrl = 'http://localhost:3000'
    LicencePage.open()
  }
  logger.info(`Starting ${userType} user journey using base url ${browser.options.baseUrl}`)
})
