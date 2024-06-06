'use strict'
const { defineStep } = require("@cucumber/cucumber")

defineStep('I should see the license number records page', async function () {
  expect(browser).toHaveTitleContaining('Enter a licence number - GOV.UK')
})
