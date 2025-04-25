'use strict'
const { defineStep } = require('@cucumber/cucumber')
const AgeWeightKeyPage = require('../../pages/Age-Weight-Key.page')

defineStep('I click on the Age weight key link', async function () {
  await AgeWeightKeyPage.clickAgeWeightKeyLink()
})
