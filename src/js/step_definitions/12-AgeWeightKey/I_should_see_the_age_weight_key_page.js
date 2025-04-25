'use strict'
const { defineStep } = require('@cucumber/cucumber')

defineStep('I should see the Age weight key page', async function () {
  await expect(browser).toHaveTitleContaining('Upload a Salmon age weight key - GOV.UK')
})
