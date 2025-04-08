'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Summary = require('../../pages/Summary.page')

defineStep(/I click change on the activity for the river (.*)/, async (riverName) => {
  await Summary.clickChangeRiver(riverName)
})
