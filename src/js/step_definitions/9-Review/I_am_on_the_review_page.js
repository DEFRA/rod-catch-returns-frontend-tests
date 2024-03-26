'use strict'
const { Given } = require('@cucumber/cucumber')
const Review = require('../../pages/Review.page')

Given('I am on the review page and I click submit', function () {
  Review.checkOpen()
  Review.continue()
})
Given('I am on the review page', function () {
  Review.checkOpen()
})
