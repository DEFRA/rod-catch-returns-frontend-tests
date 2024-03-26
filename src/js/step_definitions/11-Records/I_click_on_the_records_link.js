'use strict'
const { Given } = require('@cucumber/cucumber')
const RecordsPage = require('../../pages/Records-page')

Given('I click on the records link', function () {
  RecordsPage.clickRecords()
})
