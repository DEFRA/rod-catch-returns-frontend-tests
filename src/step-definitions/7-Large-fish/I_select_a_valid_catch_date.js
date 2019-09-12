'use strict'

const { defineStep } = require('cucumber')
const moment = require('moment')

const LargeCatch = require('../../pages/Large-Catches.page')

const getLatestValidDateForSubmissionYear = submissionYear => {
  let latestDate = moment()
  if (submissionYear < latestDate.year()) {
    latestDate = moment([submissionYear]).endOf('year')
  }
  return latestDate
}

const getValidDate = submissionYear => {
  const startOfYear = moment([submissionYear])
  const latestValid = getLatestValidDateForSubmissionYear(submissionYear)
  const daysDiff = latestValid.diff(startOfYear, 'days')
  const randomDays = Math.floor(Math.random() * daysDiff)
  return startOfYear.add(randomDays, 'days')
}

defineStep('I select a valid catch date', () => {
  const catchDate = getValidDate(browser.rcrSubmissionSeason)
  LargeCatch.setDate(catchDate.format('D'), catchDate.format('M'))
})
