'use strict'
const { defineStep } = require('cucumber')
const Season = require('../../../src/pages/Season-Select.page')
const today = new Date()

defineStep(/^If it is the extended submission period I select the (current|previous) period on the season page$/, function (periodName) {
  browser.rcrSubmissionSeason = today.getFullYear()

  if (today.getMonth() < 3) {
    Season.checkOpen()
    if (periodName === 'previous') {
      browser.rcrSubmissionSeason--
    }
    Season.selectSeason(browser.rcrSubmissionSeason)
    Season.continue()
  }
})
