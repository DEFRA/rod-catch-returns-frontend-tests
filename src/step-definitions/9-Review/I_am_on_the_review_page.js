'use strict'

const { defineStep } = require('cucumber')

const Review = require('../../../src/pages/Review.page')

defineStep('I am on the review page and I click submit', () => {
  Review.checkUrl()
  Review.clickContinue()
})

defineStep('I am on the review page', () => {
  Review.checkUrl()
})
