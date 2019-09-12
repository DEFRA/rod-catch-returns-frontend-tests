'use strict'

const { defineStep } = require('cucumber')

const Activity = require('../../pages/Add-Activities.page')

defineStep('I expect the activities page to show the following errors', errorTable => {
  const rows = errorTable.hashes()
  for (const r of rows) {
    Activity.checkErrorsOnPage(r.ErrorId, r.ErrorMessage)
  }
})

defineStep('I am on the activities page and I click cancel', () => {
  Activity.checkUrl()
  Activity.clickCancel()
})
