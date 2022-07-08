'use strict'
const { defineStep } = require("@cucumber/cucumber")
const RecordsPage = require('../../pages/Records-page')

defineStep(/^I enter invalid license number (.*)$/, function (license) {
  RecordsPage.enterLicense(license)
  RecordsPage.clickContinue()
})
