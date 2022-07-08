'use strict'
const { defineStep } = require("@cucumber/cucumber")
const LargeCatch = require('../../pages/Large-Catches.page')

defineStep(/^The catch (was|wasn't) released$/, function (wasIt) {
  // was = true, wasn't = false
  const released = wasIt === 'was'
  LargeCatch.setReleased(released)
})
