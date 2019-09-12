'use strict'

const { defineStep } = require('cucumber')

const Review = require('../../../src/pages/Draft-Has-Been-Saved.page')

defineStep('I am on the draft saved page', () => {
  Review.checkUrl()
  Review.checkMessage()
})
