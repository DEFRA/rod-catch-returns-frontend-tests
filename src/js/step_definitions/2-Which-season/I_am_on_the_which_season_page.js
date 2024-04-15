'use strict'
const { defineStep } = require("@cucumber/cucumber")
const Season = require('../../pages/Season-Select.page')
const today = new Date()

defineStep(/^If it is the extended submission period I select the (current|previous) period on the season page$/, async function (periodName) {
  browser.rcrSubmissionSeason = today.getFullYear()

  if (today.getMonth() < 3) {
    await Season.checkOpen()
    if (periodName === 'previous') {
      browser.rcrSubmissionSeason--
    }
    await Season.selectSeason(browser.rcrSubmissionSeason)
    await Season.continue()
  }
})
