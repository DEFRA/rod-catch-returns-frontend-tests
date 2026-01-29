'use strict'
const { defineStep } = require('@cucumber/cucumber')

defineStep('I should not see the license number records page', async function () {
  await expect(browser).not.toHaveTitle('Enter a licence number - Report your salmon or sea trout catch - GOV.UK')
})
