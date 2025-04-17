'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Summary = require('../../pages/Summary.page')

defineStep(/I click (change|delete|exclude) on the small catch with the month as (.*) and the river as (.*)/, async (action, month, riverName) => {
  if (action === 'change') {
    await Summary.clickChangeSmallCatch(month, riverName)
  } else if (action === 'delete') {
    await Summary.clickDeleteSmallCatch(month, riverName)
  } else {
    await Summary.clickExcludeCheckboxSmallCatch(month, riverName)
  }
})
