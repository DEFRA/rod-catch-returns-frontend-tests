'use strict'
const { defineStep } = require('@cucumber/cucumber')

defineStep('I click cancel', async function () {
  const cancelButton = await $('=Cancel')
  await cancelButton.click()
})
