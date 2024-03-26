'use strict'
const { Given } = require('@cucumber/cucumber')
const LargeCatch = require('../../pages/Large-Catches.page')

Given(/^I save the large catch and (return to the summary|add another)$/, function (action) {
  if (action === 'add another') {
    LargeCatch.saveAndAddAnother()
  } else {
    LargeCatch.continue()
  }
})
