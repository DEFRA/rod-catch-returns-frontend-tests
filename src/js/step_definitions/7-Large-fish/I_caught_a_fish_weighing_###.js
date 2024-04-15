'use strict'
const { defineStep } = require("@cucumber/cucumber")
const LargeCatch = require('../../pages/Large-Catches.page')

defineStep(/^I caught a fish weighing (\d+(?:\.\d+)?)\s*kg$/, async function (kg) {
  await LargeCatch.setMetricMass(kg)
})

defineStep(/^I caught a fish weighing (\d+)\s*lbs (\d+)\s*oz$/, async function (lbs, oz) {
  await LargeCatch.setImperialMass(lbs, oz)
})
