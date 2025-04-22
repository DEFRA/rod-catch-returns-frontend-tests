'use strict'
const { defineStep } = require('@cucumber/cucumber')
const RecordsPage = require('../../pages/Records-page')

defineStep('I click on the Age weight key link', async function () {
  await RecordsPage.clickRecords()
})
