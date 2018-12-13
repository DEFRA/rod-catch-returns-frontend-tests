'use strict'
const { defineStep } = require('cucumber')
const AdminLoginPage = require('../../pages/AdminLogin-page')
const LicencePage = require('../../pages/Licence-page')
const { logger } = require('defra-logging-facade')

defineStep(/I am an (external|administrative) user/, function (userType) {
  if (userType === 'administrative') {
    browser.options.baseUrl = browser.options.baseAdminUrl
    AdminLoginPage.open()
  } else {
    browser.options.baseUrl = browser.options.baseExternalUrl
    LicencePage.open()
  }
  logger.info(`Starting ${userType} user journey using base url ${browser.options.baseUrl}`)
})
