'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Summary = require('../../pages/Summary.page')

defineStep(/I click delete on the large catch with the river as (.*) and the type as (.*)/, async (riverName, type) => {
  await Summary.clickDeleteLargeCatch(riverName, type)
})
