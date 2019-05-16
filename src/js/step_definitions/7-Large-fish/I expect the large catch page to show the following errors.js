'use strict'
const { defineStep } = require('cucumber')
const LargeCatch = require('../../pages/Large-Catches.page')

/**
 1. Step definition access the table defined in the NEG Feature file
 2.  rows relate to rows in table in feature file
 3. ErrorId and ErrorMessage relate to columns in table in feature  file
 4. CheckErrorOnPage functioon in pages.js page.
 *
 */

defineStep('I expect the large catch page to show the following errors', function (errorTable) {
  const rows = errorTable.hashes()
  for (const row of rows) {
    LargeCatch.checkErrorsOnPage(row.ErrorId, row.ErrorMessage)
  }
})

defineStep('I am on the large catch page and I click cancel', function () {
  LargeCatch.open()
  LargeCatch.checkOpen()
  LargeCatch.clickCancel()
})
