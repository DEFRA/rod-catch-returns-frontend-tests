'use strict'
const { defineStep } = require('@cucumber/cucumber')
const AgeWeightKeyPage = require('../../pages/Age-Weight-Key.page')

defineStep(/I select (.*) as the gate for the age weight key/, async (gate) => {
  await AgeWeightKeyPage.selectGate(gate)
})
