'use strict'
const {defineStep} = require('cucumber')
const Review = require('../../pages/Review.page')

defineStep('I am on the review page and I click submit', function () {
  Review.open
  Review.checkOpen()
  Review.continue()
})
defineStep('I am on the review page', function () {
  Review.open
  Review.checkOpen()
})
