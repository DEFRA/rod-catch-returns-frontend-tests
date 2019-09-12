'use strict'

const { defineStep } = require('cucumber')

const SmallCatch = require('../../pages/Small-Catches.page')

defineStep('I expect the small catch page to show the following errors', errorTable => {
  const rows = errorTable.hashes()
  for (const r of rows) {
    SmallCatch.checkErrorsOnPage(r.ErrorId, r.ErrorMessage)
  }
})

defineStep('I am on the small catch page and I click cancel', () => {
  SmallCatch.checkUrl()
  SmallCatch.clickCancel()
})
