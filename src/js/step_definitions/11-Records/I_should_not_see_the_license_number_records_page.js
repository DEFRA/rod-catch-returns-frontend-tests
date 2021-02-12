'use strict'
const { defineStep } = require('cucumber')

defineStep('I should not see the license number records page', function () {
  expect(browser).not.toHaveTitleContaining('Enter a licence number - GOV.UK')
})
