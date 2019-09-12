'use strict'

const { defineStep } = require('cucumber')
const { logger } = require('defra-logging-facade')

const AdminLoginPage = require('../../../src/pages/AdminLogin-page')
const LicencePage = require('../../../src/pages/Licence-page')

defineStep(/I am an (administrative|external) user/, userType => {
  if (userType === 'administrative') {
    browser.options.baseUrl = 'http://localhost:4000'
    AdminLoginPage.open()
  } else {
    browser.options.baseUrl = 'http://localhost:3000'
    LicencePage.open()
  }

  logger.info(`Starting ${userType} user journey using base url ${browser.options.baseUrl}`)
})
