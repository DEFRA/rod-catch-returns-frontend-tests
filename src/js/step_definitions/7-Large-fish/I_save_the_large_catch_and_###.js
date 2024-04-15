'use strict'
const { defineStep } = require("@cucumber/cucumber")
const LargeCatch = require('../../pages/Large-Catches.page')

defineStep(/^I save the large catch and (return to the summary|add another)$/, async function (action) {
  if (action === 'add another') {
    await LargeCatch.saveAndAddAnother()
  } else {
    await LargeCatch.continue()
  }
})
