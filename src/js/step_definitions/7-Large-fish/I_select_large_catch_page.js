'use strict'
const {defineStep} = require('cucumber')
const LargeCatch = require('../../pages/Large-Catches.page')
const util = require('util')
const winston = require('winston')

defineStep('I select the salmon button', function () {
  winston.info('LargeCatch Object: ')
  winston.info(util.inspect(LargeCatch, {colors: true}))
  LargeCatch.clickLargeCatchButtons(LargeCatch.fishButtons.type1Button.id)

})

defineStep('I select the sea trout radio button', function () {
  winston.info('LargeCatch Object:')
  winston.info(util.inspect(LargeCatch, {colors: true}))
  LargeCatch.clickLargeCatchButtons(LargeCatch.fishButtons.type2Button.id)

})

defineStep('I select the in pounds radio button', function () {
  winston.info('LargeCatch Object:')
  winston.info(util.inspect(LargeCatch, {colors: true}))
  LargeCatch.clickLargeCatchButtons(LargeCatch.weightButtons.system1Button.id)

})

defineStep('I select the in kilograms radio button', function () {
  winston.info('LargeCatch Object:')
  winston.info(util.inspect(LargeCatch, {colors: true}))
  LargeCatch.clickLargeCatchButtons(LargeCatch.weightButtons.system2Button.id)

})

defineStep('I enter kilos', function () {
  winston.info('LargeCatch Object:')
  winston.info(util.inspect(LargeCatch, {colors: true}))
  LargeCatch.enterKilos()

})

defineStep('I select the fly radio button', function () {
  winston.info('LargeCatch Object:')
  winston.info(util.inspect(LargeCatch, {colors: true}))
  LargeCatch.clickLargeCatchButtons(LargeCatch.methodButtons.method1Button.id)

})

defineStep('I select the spinner radio button', function () {
  winston.info('LargeCatch Object:')
  winston.info(util.inspect(LargeCatch, {colors: true}))
  LargeCatch.clickLargeCatchButtons(LargeCatch.methodButtons.method2Button.id)

})

defineStep('I select the bait radio button', function () {
  winston.info('LargeCatch Object:')
  winston.info(util.inspect(LargeCatch, {colors: true}))
  LargeCatch.clickLargeCatchButtons(LargeCatch.methodButtons.method3Button.id)

})

defineStep('I select the released yes radio button', function () {
  winston.info('LargeCatch Object:')
  winston.info(util.inspect(LargeCatch, {colors: true}))
  LargeCatch.clickLargeCatchButtons(LargeCatch.releaseButtons.release1Button.id)
  winston.info('Continuing....')
  LargeCatch.continue()
})

defineStep('I select the released no radio button', function () {
  winston.info('LargeCatch Object:')
  winston.info(util.inspect(LargeCatch, {colors: true}))
  LargeCatch.clickLargeCatchButtons(LargeCatch.releaseButtons.release2Button.id)

})

defineStep('I select a large river', function () {
  LargeCatch.selectLargeRiver()
})

defineStep('I enter a date', function () {
  LargeCatch.enterDateDay()
  LargeCatch.enterDateMonth()

})


