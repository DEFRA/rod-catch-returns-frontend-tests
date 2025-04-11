'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Summary = require('../../pages/Summary.page')

defineStep(/I click delete on the activity for the river (.*)/, async function (riverName) {
  await Summary.open()
  await Summary.checkOpen()
  await Summary.clickDeleteRiver(riverName)
})
