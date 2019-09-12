'use strict'

const { defineStep } = require('cucumber')

const LargeCatch = require('../../pages/Large-Catches.page')

defineStep(/I save the large catch and (return to the summary|add another)(?:; url should (not) change)?/, (action, errors) => {
  action === 'add another' ? LargeCatch.saveAndAddAnother() : LargeCatch.clickContinue(!errors)
})
