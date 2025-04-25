'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Review = require('../../pages/Review.page')

defineStep(/The exclude checkbox is checked for the large catch with the river as (.*) and the type as (.*)/, async (riverName, type) => {
  await Review.checkExcludeCheckboxCheckedLargeCatch(riverName, type)
})
