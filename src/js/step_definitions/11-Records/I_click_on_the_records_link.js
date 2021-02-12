'use strict'
const { defineStep } = require('cucumber')
const RecordsPage = require('../../pages/Records-page')

defineStep('I click on the records link', function () {
  RecordsPage.clickRecords()
})
