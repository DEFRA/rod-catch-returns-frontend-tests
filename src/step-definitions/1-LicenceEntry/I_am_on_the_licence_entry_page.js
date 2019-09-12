'use strict'

const { defineStep } = require('cucumber')

const LicencePage = require('../../../src/pages/Licence-page')

defineStep('I am on the licence entry page', () => {
  LicencePage.checkUrl()
})
