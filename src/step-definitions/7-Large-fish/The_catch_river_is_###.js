'use strict'

const { defineStep } = require('cucumber')

const LargeCatch = require('../../pages/Large-Catches.page')

defineStep(/The catch river is (.+)/, riverName => {
  LargeCatch.setRiver(riverName)
})