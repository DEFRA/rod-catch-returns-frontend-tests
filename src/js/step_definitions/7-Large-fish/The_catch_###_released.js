'use strict'
const { Given } = require('@cucumber/cucumber')
const LargeCatch = require('../../pages/Large-Catches.page')

Given(/^The catch (was|wasn't) released$/, function (wasIt) {
  // was = true, wasn't = false
  const released = wasIt === 'was'
  LargeCatch.setReleased(released)
})
