'use strict'
const {defineStep} = require('cucumber')
const SmallCatch = require('../../pages/Small-Catches.page')
const util = require('util')
const winston = require('winston')


defineStep('I select a small river', function () {
  winston.info('SmallCatch Object:')
  winston.info(util.inspect(SmallCatch, {colors: true}))
  SmallCatch.selectRiver()
})

defineStep('I select a month', function () {
  winston.info('SmallCatch Object:')
  winston.info(util.inspect(SmallCatch, {colors: true}))
  SmallCatch.selectMonth()
})

defineStep('I enter number of fish caught fly', function () {
  winston.info('SmallCatch Object:')
  winston.info(util.inspect(SmallCatch, {colors: true}))
  SmallCatch.enterFlyDays()
})

defineStep('I enter number of fish caught spinner', function () {
  winston.info('SmallCatch Object:')
  winston.info(util.inspect(SmallCatch, {colors: true}))
  SmallCatch.enterSpinDays()
})

defineStep('I enter number of fish caught bait', function () {
  winston.info('SmallCatch Object:')
  winston.info(util.inspect(SmallCatch, {colors: true}))
  SmallCatch.enterBaitDays()
})

defineStep('I enter number of fish released', function () {
  winston.info('SmallCatch Object:')
  winston.info(util.inspect(SmallCatch, {colors: true}))
  SmallCatch.enterNoRelease()
  winston.info('Continuing....')
  SmallCatch.continue()
})
