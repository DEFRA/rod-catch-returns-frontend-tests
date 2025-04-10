'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Review = require('../../pages/Review.page')

defineStep('I expect the review page to show the following activities', async function (activityTable) {
  await Review.validateActivitiesTable(activityTable)
})

defineStep('I expect the review page to show the following large catches', async function (activityTable) {
  await Review.validateLargeCatchesTable('Salmon and large adult sea trout', activityTable)
})
