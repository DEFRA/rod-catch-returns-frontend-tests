'use strict'
const { defineStep } = require("@cucumber/cucumber")
const RecordsPage = require('../../pages/Records-page')

defineStep(/^I enter invalid license number (.*)$/, async function (license) {
  await RecordsPage.enterLicense(license)
  await RecordsPage.clickContinue()
})
