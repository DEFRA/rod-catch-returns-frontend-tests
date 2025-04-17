'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Review = require('../../pages/Review.page')

defineStep('The exclude checkbox is checked for the submission', async () => {
  await Review.checkExcludeCheckboxCheckedSubmission()
})
