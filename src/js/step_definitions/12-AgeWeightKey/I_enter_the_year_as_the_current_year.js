'use strict'
const { defineStep } = require('@cucumber/cucumber')
const AgeWeightKeyPage = require('../../pages/Age-Weight-Key.page')

defineStep('I enter the year as the current year for the age weight key', async function () {
  const year = new Date().getFullYear()
  await AgeWeightKeyPage.enterYear(year)
})
