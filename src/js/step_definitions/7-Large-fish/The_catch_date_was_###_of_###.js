'use strict'
const {defineStep} = require('cucumber')
const LargeCatch = require('../../pages/Large-Catches.page')
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const monthRegexString = monthNames.join('|')
const stepRegex = new RegExp(`The catch date was (\\d+) of (${monthRegexString})`, 'gi')
defineStep(stepRegex, function (dayOfMonth, monthName) {
  let monthNumber = monthNames.indexOf(monthName) + 1
  LargeCatch.setDate(dayOfMonth, monthNumber)
})
