'use strict'
const { Given } = require('@cucumber/cucumber')
const RecordsPage = require('../../pages/Records-page')

Given('I see an error message', function () {
  RecordsPage.errorMessage()
})
