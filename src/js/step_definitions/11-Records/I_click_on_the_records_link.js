'use strict'
const { defineStep } = require("@cucumber/cucumber")
const RecordsPage = require('../../pages/Records-page')

defineStep('I click on the records link', async function () {
  await RecordsPage.clickRecords()
})
