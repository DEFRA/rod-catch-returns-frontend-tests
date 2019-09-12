'use strict'

const { defineStep } = require('cucumber')

const ConfirmPage = require('../../../src/pages/Confirmation.page')

defineStep('I am on the confirmation page', () => {
  ConfirmPage.checkUrl()
})
