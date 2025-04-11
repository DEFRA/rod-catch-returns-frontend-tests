'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Summary = require('../../pages/Summary.page')

defineStep(/I click change on the small catch with the month as (.*) and the river as (.*)/, async (month, riverName) => {
  await Summary.clickChangeSmallCatch(month, riverName)
})
