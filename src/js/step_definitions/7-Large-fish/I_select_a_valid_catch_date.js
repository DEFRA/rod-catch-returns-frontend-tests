'use strict'
const { defineStep } = require("@cucumber/cucumber")
const moment = require('moment')
const LargeCatch = require('../../pages/Large-Catches.page')

function getLatestValidDateForSubmissionYear (submissionYear) {
  // default to today
  let latestDate = moment()
  // if the submission is for a previous year, the latest valid date will be the end of that year
  if (submissionYear < latestDate.year()) {
    latestDate = moment([submissionYear]).endOf('year')
  }
  return latestDate
}

function getValidDate (submissionYear) {
  const startOfYear = moment([submissionYear])
  const latestValid = getLatestValidDateForSubmissionYear(submissionYear)
  const daysDiff = latestValid.diff(startOfYear, 'days')
  const randomDays = Math.floor(Math.random() * daysDiff)
  return startOfYear.add(randomDays, 'days')
}

defineStep('I select a valid catch date', async function () {
  const catchDate = getValidDate(browser.rcrSubmissionSeason)
  await LargeCatch.setDate(catchDate.format('D'), catchDate.format('M'))
})
