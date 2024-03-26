'use strict'
const { Given } = require('@cucumber/cucumber')
const LicencePage = require('../../pages/Licence-page')

Given('I am on the licence entry page', function () {
  LicencePage.checkOpen()
})
