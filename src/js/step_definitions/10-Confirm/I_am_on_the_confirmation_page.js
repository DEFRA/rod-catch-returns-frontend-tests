'use strict'
const { defineStep } = require("@cucumber/cucumber")
const ConfirmPage = require('../../pages/Confirmation.page')

defineStep('I am on the confirmation page', async function () {
  await ConfirmPage.checkOpen()
})
