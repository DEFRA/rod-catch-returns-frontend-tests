'use strict'
const { defineStep } = require("@cucumber/cucumber")

defineStep('I should see the license number records page', function () {
  expect(browser).toHaveTitleContaining('Enter a licence number - GOV.UK')
})
