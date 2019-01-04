'use strict'
const { defineStep } = require('cucumber')
const Season = require('../../pages/Season-select.page')
const Fish = require('../../pages/Did-you-fish.page')
const { logger } = require('defra-logging-facade')

const today = new Date()
const mm = today.getMonth() + 1


defineStep('If it is the extended submission period I select the first period on the season page', function (){
  if (mm <= 3) {
      Season.checkOpen()
      logger.debug('Select Year Object:', Season)
      Season.clickSeasonButtons(Season.seasonButton.year1Button.id)
      Season.continue()
  } else {
      Fish.checkOpen()
  }

})
