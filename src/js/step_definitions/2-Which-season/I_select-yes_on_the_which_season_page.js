'use strict'
const { defineStep } = require('cucumber')
const SelectYear = require('../../pages/Season-Select.page')
const util = require('util')
const { logger } = require('defra-logging-facade')

defineStep('I select season 1 and I click continue', function () {
  logger.info('Select Year Object:')
  logger.info(util.inspect(SelectYear, { colors: true }))
  SelectYear.clickSeasonButtons(SelectYear.seasonButton.year1Button.id)
  logger.log(SelectYear.seasonButton.year1Button.id)
  SelectYear.continue()
})

defineStep('I select season 2 and I click continue', function () {
  logger.info('Select Year Object:')
  logger.info(util.inspect(SelectYear, { colors: true }))
  SelectYear.clickSeasonButtons(SelectYear.seasonButton.year2Button.id)
  SelectYear.continue()
})
