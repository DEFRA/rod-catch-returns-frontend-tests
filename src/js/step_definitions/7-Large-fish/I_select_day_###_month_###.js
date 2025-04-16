'use strict'
const { defineStep } = require('@cucumber/cucumber')
const LargeCatch = require('../../pages/Large-Catches.page')

defineStep(/I select day as (.+) and month as (.+)/, async function (dayOfMonth, monthNumber) {
  await LargeCatch.setDate(dayOfMonth, monthNumber)
})
