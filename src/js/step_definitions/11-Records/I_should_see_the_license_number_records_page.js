import { defineStep } from '@cucumber/cucumber'

defineStep('I should see the license number records page', async function () {
  await expect(browser).toHaveTitle('Enter a licence number - Report your salmon and sea trout fishing activity - GOV.UK')
})
