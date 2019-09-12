'use strict'

const { defineStep } = require('cucumber')

const LargeCatch = require('../../pages/Large-Catches.page')

defineStep('I expect the large catch page to show the following errors', errorTable => {
  const rows = errorTable.hashes()
  for (const r of rows) {
    LargeCatch.checkErrorsOnPage(r.ErrorId, r.ErrorMessage)
  }
})

defineStep('I am on the large catch page and I click cancel', () => {
  LargeCatch.checkUrl()
  LargeCatch.clickCancel()
})
