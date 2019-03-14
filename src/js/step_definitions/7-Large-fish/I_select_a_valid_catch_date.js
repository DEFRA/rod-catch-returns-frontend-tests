'use strict'
const { defineStep } = require('cucumber')
const moment = require('moment')
const LargeCatch = require('../../pages/Large-Catches.page')
defineStep('I select a valid catch date', function () {
  // Get the current season from the page
  let submissionYear = LargeCatch.getYear()
  let today = moment()

  if (submissionYear === today.year()) {
    // Need to pick a date between 1 Jan and today
    let startOfYear = moment().startOf('year')
    let daysDiff = today.diff(startOfYear, 'days')
    let randomNumberOfDaysAgo = Math.floor(Math.random() * daysDiff)
    let catchDate = today.subtract(randomNumberOfDaysAgo, 'days')
    LargeCatch.setDate(catchDate.date(), catchDate.month())
  } else {
    // Any date of the year will be valid (submission for last season)
    let startOfYear = moment([submissionYear, 1, 1])
    let randomDays = Math.floor(Math.random() * 365)
    let catchDate = startOfYear.add(randomDays, 'days')
    LargeCatch.setDate(catchDate.date(), catchDate.month())
  }
})
