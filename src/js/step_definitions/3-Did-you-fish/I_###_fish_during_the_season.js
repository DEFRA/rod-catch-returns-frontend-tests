'use strict'
const {defineStep} = require('cucumber')
const DYF = require('../../pages/Did-you-fish.page')

defineStep(/^I (did|didn't) fish during the season$/, function (didThey) {
  DYF.checkOpen()
  DYF.setFished(didThey === 'did')
  DYF.continue()
})
