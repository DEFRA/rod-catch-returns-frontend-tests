'use strict'

const { defineStep } = require('cucumber')

const SmallCatch = require('../../pages/Small-Catches.page')

defineStep(/I save the small catch and (return to the summary|add another)(?:; url should (not) change)?/, (action, errors) => {
  action === 'add another' ? SmallCatch.saveAndAddAnother() : SmallCatch.clickContinue(!errors)
})
