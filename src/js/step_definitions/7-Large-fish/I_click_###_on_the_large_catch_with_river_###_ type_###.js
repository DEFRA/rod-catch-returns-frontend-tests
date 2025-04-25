'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Summary = require('../../pages/Summary.page')

defineStep(/I click (change|delete|exclude) on the large catch with the river as (.*) and the type as (.*)/, async (action, riverName, type) => {
  if (action === 'change') {
    await Summary.clickChangeLargeCatch(riverName, type)
  } else if (action === 'delete') {
    await Summary.clickDeleteLargeCatch(riverName, type)
  } else {
    await Summary.clickExcludeCheckboxLargeCatch(riverName, type)
  }
})
