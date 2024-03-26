'use strict'
const { Given } = require('@cucumber/cucumber')
const ConfirmPage = require('../../pages/Confirmation.page')

Given('I am on the confirmation page', function () {
  ConfirmPage.checkOpen()
})
