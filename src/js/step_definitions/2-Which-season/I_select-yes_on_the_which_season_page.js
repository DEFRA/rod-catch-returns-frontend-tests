'use strict'
const {defineStep} = require('cucumber')
const SelectYear = require('../../pages/Season-Select.page')
const util = require('util')
const winston = require('winston')



defineStep('I select season 1 and I click continue', function () {
  winston.info('Select Year Object:')
  winston.info(util.inspect(SelectYear, {colors: true}))
  SelectYear.clickSeasonButtons(SelectYear.seasonButton.year1Button.id)
  console.log(SelectYear.seasonButton.year1Button.id)
  SelectYear.continue()

})

defineStep('I select season 2 and I click continue', function () {
  winston.info('Select Year Object:')
  winston.info(util.inspect(SelectYear, {colors: true}))
  SelectYear.clickSeasonButtons(SelectYear.seasonButton.year2Button.id)
  SelectYear.continue()

})
