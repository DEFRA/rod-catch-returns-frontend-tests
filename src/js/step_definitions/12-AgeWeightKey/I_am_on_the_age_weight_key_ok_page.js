'use strict'
const { defineStep } = require('@cucumber/cucumber')
const AgeWeightKeyPageOk = require('../../pages/Age-Weight-Key-Ok.page')

defineStep('I am on the age weight key ok page', async function () {
  await AgeWeightKeyPageOk.checkOpen()
  await AgeWeightKeyPageOk.checkMessage()
})
