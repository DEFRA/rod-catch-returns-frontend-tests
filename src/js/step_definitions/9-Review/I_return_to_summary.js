'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Review = require('../../pages/Review.page')

defineStep('I return to summary', async function () {
  await Review.checkOpen()
  await Review.clickCancel()
})
