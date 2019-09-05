'use strict'
const { defineStep } = require('cucumber')
const LargeCatch = require('../../pages/Large-Catches.page')

defineStep(/^I caught a fish weighing (\d+(?:\.\d+)?)\s*kg$/, function (kg) {
  LargeCatch.setMetricMass(kg)
})

defineStep(/^I caught a fish weighing (\d+)\s*lbs (\d+)\s*oz$/, function (lbs, oz) {
  LargeCatch.setImperialMass(lbs, oz)
})
