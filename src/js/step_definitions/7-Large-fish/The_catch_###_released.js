'use strict'
const {defineStep} = require('cucumber')
const LargeCatch = require('../../pages/Large-Catches.page')

defineStep(/^The catch (was|wasn't) released$/, function (wasIt) {
  // was = true, wasn't = false
  let released = wasIt === 'was'
  LargeCatch.setReleased(released)
})
