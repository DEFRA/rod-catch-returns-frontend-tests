'use strict'
const { defineStep } = require("@cucumber/cucumber")
const LargeCatch = require('../../pages/Large-Catches.page')

defineStep(/^The catch river is (.+)$/, function (riverName) {
  LargeCatch.setRiver(riverName)
})
