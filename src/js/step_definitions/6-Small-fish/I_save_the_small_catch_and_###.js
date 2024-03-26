'use strict'
const { Given } = require('@cucumber/cucumber')
const SmallCatch = require('../../pages/Small-Catches.page')

Given(/^I save the small catch and (return to the summary|add another)$/, function (action) {
  if (action === 'add another') {
    SmallCatch.saveAndAddAnother()
  } else {
    SmallCatch.continue()
  }
})
