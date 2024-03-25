'use strict'
const { Given } = require('@cucumber/cucumber')
const LargeCatch = require('../../pages/Large-Catches.page')

Given(/^I caught a fish weighing (\d+(?:\.\d+)?)\s*kg$/, function (kg) {
  LargeCatch.setMetricMass(kg)
})

Given(/^I caught a fish weighing (\d+)\s*lbs (\d+)\s*oz$/, function (lbs, oz) {
  LargeCatch.setImperialMass(lbs, oz)
})
