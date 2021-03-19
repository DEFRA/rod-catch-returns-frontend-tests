'use strict'
const { defineStep } = require('cucumber')
const RecordsPage = require('../../pages/Records-page')

defineStep('I see an error message', function () {
  RecordsPage.errorMessage()
})
