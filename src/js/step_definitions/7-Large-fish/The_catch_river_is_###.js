'use strict'
const { Given } = require('@cucumber/cucumber')
const LargeCatch = require('../../pages/Large-Catches.page')

Given(/^The catch river is (.+)$/, function (riverName) {
  LargeCatch.setRiver(riverName)
})
