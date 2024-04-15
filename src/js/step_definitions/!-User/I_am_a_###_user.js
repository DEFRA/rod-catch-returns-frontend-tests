'use strict'
const { defineStep } = require("@cucumber/cucumber")
const AdminLoginPage = require('../../pages/AdminLogin-page')
const LicencePage = require('../../pages/Licence-page')
const { logger } = require('defra-logging-facade')

defineStep(/I am an (external|administrative) user/, async function (userType) {
  if (userType === 'administrative') {
    browser.options.baseUrl = browser.config.baseAdminUrl
    await AdminLoginPage.open()
  } else {
    browser.options.baseUrl = browser.config.baseExternalUrl
    await LicencePage.open()
  }
  logger.info(`Starting ${userType} user journey using base url ${browser.options.baseUrl}`)
})
