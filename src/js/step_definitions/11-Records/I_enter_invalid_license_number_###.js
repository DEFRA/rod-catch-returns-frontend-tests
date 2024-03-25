'use strict'
const { Given } = require('@cucumber/cucumber')
const RecordsPage = require('../../pages/Records-page')

Given(/^I enter invalid license number (.*)$/, function (license) {
  RecordsPage.enterLicense(license)
  RecordsPage.clickContinue()
})
