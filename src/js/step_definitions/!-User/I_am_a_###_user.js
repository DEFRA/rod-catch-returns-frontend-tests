'use strict'
const { Given } = require('@cucumber/cucumber')
const AdminLoginPage = require('../../pages/AdminLogin-page')
const LicencePage = require('../../pages/Licence-page')
const { logger } = require('defra-logging-facade')

Given(/I am an (external|administrative) user/, function (userType) {
  if (userType === 'administrative') {
    browser.options.baseUrl = browser.config.baseAdminUrl
    AdminLoginPage.open()
  } else {
    browser.options.baseUrl = browser.config.baseExternalUrl
    LicencePage.open()
  }
  logger.info(`Starting ${userType} user journey using base url ${browser.options.baseUrl}`)
})
