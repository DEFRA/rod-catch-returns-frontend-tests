'use strict'
const {defineStep} = require('cucumber')
const DYFYN = require('../../pages/Did-you-fish.page')
const util = require('util')
const winston = require('winston')


defineStep('I select yes and I click continue', function () {
  winston.info('Select Year Object:')
  winston.info(util.inspect(DYFYN, {colors: true}))
  DYFYN.clickDidYouFishButtons(DYFYN.didYouFishButtons.type1Button.id)
  DYFYN.continue()

})

defineStep('I select no and I click continue', function () {
  winston.info('Select Year Object:')
  winston.info(util.inspect(DYFYN, {colors: true}))
  DYFYN.clickDidYouFishButtons(DYFYN.didYouFishButtons.type2Button.id)
  DYFYN.continue()

})

