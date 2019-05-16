'use strict'
const { defineStep } = require('cucumber')
const Activity = require('../../pages/Add-Activities.page')

/**
 1. Step definition access the table defined in the NEG Feature file
 2.  rows relate to rows in table in feature file
 3. ErrorId and ErrorMessage relate to columns in table in feature  file
 4. CheckErrorOnPage functiopon in pages.js page.
 *
 */

defineStep('I expect the activities page to show the following errors', function (errorTable) {
  const rows = errorTable.hashes()
  for (const row of rows) {
    Activity.checkErrorsOnPage(row.ErrorId, row.ErrorMessage)
  }
})

defineStep('I am on the activities page and I click cancel', function () {
  Activity.open()
  Activity.checkOpen()
  Activity.clickCancel()
})
