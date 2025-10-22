'use strict'
const { defineStep } = require('@cucumber/cucumber')
const LoginPage = require('../../pages/Licence-page')
const logger = require('../../utils/logger')

defineStep(/I submit the licence (.*) and postcode (.*)/, async (licence, postcode) => {
  logger.debug(`Attempting to login with licence: ${licence} and postcode: ${postcode}`)
  await LoginPage.submit(licence, postcode)
})
