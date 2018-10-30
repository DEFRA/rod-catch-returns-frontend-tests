'use strict'
const {defineStep} = require('cucumber')
const LargeCatch = require('../../pages/Large-Catches.page')

defineStep(/I caught a fish weighing ((\d+)(\.\d+))? kilos/, function (kilos) {
  LargeCatch.setMetricMass(kilos)
})

defineStep(/I caught a fish weighing (\d+) lbs (\d+) oz/, function (lbs, oz) {
  LargeCatch.setImperialMass(lbs, oz)
})
