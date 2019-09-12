'use strict'

const { defineStep } = require('cucumber')

const LargeCatch = require('../../../src/pages/Large-Catches.page')

defineStep(/The catch (was|wasn't) released/, answer => {
  LargeCatch.setReleased(answer)
})
