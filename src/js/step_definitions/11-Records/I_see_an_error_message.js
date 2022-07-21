'use strict'
const { defineStep } = require("@cucumber/cucumber")
const RecordsPage = require('../../pages/Records-page')

defineStep('I see an error message', function () {
  RecordsPage.errorMessage()
})
