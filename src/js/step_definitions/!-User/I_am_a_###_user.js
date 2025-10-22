'use strict'
const { defineStep } = require('@cucumber/cucumber')
const AdminLoginPage = require('../../pages/AdminLogin-page')
const LicencePage = require('../../pages/Licence-page')
const logger = require('../../utils/logger')

defineStep(/I am an (external|administrative) user/, async function (userType) {
  if (userType === 'administrative') {
    browser.options.baseUrl = browser.options.baseAdminUrl
    await AdminLoginPage.open()
  } else {
    browser.options.baseUrl = browser.options.baseExternalUrl
    await LicencePage.open()
  }
  logger.info(`Starting ${userType} user journey using base url ${browser.options.baseUrl}`)
})
