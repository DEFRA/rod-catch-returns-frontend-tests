'use strict'

const { defineStep } = require('cucumber')

const Season = require('../../../src/pages/Season-Select.page')

defineStep(/If it is the extended submission period I select the (current|previous) period on the season page/, periodName => {
  const today = new Date()
  let year = today.getFullYear()

  if (today.getMonth() < 3) {
    if (periodName === 'previous') year -= 2
    Season.checkUrl()
    Season.submit(year)
  }

  browser.rcrSubmissionSeason = year
})
