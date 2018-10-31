'use strict'
const { defineStep } = require('cucumber')
const LargeCatch = require('../../pages/Large-Catches.page')

defineStep(/^The catch method is (.+)$/, function (methodName) {
  LargeCatch.setMethod(methodName)
})
