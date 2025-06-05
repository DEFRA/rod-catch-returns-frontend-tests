'use strict'
const { defineStep } = require('@cucumber/cucumber')
const AgeWeightKeyPage = require('../../pages/Age-Weight-Key.page')

defineStep(/I enter the year as (.*) for the age weight key/, async function (year) {
  const resolvedYear = year === 'the current year' ? new Date().getFullYear() : year
  await AgeWeightKeyPage.enterYear(resolvedYear)
})
