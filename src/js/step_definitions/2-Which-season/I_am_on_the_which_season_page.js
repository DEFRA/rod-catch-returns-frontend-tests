'use strict'
const { defineStep } = require('cucumber')
const Season = require('../../pages/Season-Select.page')
const { logger } = require('defra-logging-facade')
const today = new Date()

defineStep(/^If it is the extended submission period I select the (current|previous) period on the season page$/, function (periodName) {
  if (today.getMonth() < 3) {
    Season.checkOpen()

    let season = today.getFullYear()
    if (periodName === 'previous') {
      season--
    }
    logger.debug('Year to select=', periodName)
    Season.selectSeason(season)
    Season.continue()
  }
})
