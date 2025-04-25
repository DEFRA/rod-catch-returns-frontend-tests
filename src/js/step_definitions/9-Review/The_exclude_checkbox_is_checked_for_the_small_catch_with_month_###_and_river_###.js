'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Review = require('../../pages/Review.page')

defineStep(/The exclude checkbox is checked for the small catch with the month as (.*) and the river as (.*)/, async (month, riverName) => {
  await Review.checkExcludeCheckboxCheckedSmallCatch(month, riverName)
})
