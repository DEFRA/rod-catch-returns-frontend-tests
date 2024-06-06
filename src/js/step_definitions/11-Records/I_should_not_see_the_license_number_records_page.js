'use strict'
const { defineStep } = require("@cucumber/cucumber")

defineStep('I should not see the license number records page', async function () {
  expect(browser).not.toHaveTitleContaining('Enter a licence number - GOV.UK')
})
