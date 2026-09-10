import { defineStep } from '@cucumber/cucumber'

defineStep('I should see the Age weight key page', async function () {
  await expect(browser).toHaveTitle('Upload a Salmon age weight key - Report your salmon and sea trout fishing activity - GOV.UK')
})
