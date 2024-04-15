'use strict'
const { defineStep } = require("@cucumber/cucumber")
const Review = require('../../pages/Review.page')

defineStep('I am on the review page and I click submit', async function () {
  await Review.checkOpen()
  await Review.continue()
})

defineStep('I am on the review page', async function () {
  await Review.checkOpen()
})
