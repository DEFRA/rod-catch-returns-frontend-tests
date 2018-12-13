'use strict'
const { defineStep } = require('cucumber')
const LicencePage = require('../../pages/Licence-page')

defineStep('I am on the licence entry page', function () {
  LicencePage.checkOpen()
})
