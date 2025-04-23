'use strict'
const { defineStep } = require('@cucumber/cucumber')
const AgeWeightKeyPage = require('../../pages/Age-Weight-Key.page')

defineStep('I click upload', async function () {
  await AgeWeightKeyPage.clickUpload()
})
