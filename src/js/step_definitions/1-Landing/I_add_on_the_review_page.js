'use strict'
const {defineStep} = require('cucumber')
const Review = require('../../pages/Summary.page')

defineStep('I am on the review page and I click submit', function () {
  Review.open()
  Review.checkOpen()
  Review.continue()
})
