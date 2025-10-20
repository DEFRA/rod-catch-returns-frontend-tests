'use strict'
const { defineStep } = require('@cucumber/cucumber')

defineStep('I should see the license number records page', async function () {
  await expect(browser).toHaveTitleContaining('Enter a licence number - Report your salmon or sea trout catch - GOV.UK')
})
