'use strict'
const { Given } = require('@cucumber/cucumber')
const LargeCatch = require('../../pages/Large-Catches.page')

Given(/^The catch method is (.+)$/, function (methodName) {
  LargeCatch.setMethod(methodName)
})
