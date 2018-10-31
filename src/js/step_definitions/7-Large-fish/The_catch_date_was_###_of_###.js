'use strict'
const { defineStep } = require('cucumber')
const LargeCatch = require('../../pages/Large-Catches.page')
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
defineStep(/^The catch date was (\d+) of (.*)$/, function (dayOfMonth, monthName) {
  let monthNumber = monthNames.indexOf(monthName) + 1
  LargeCatch.setDate(dayOfMonth, monthNumber)
})
