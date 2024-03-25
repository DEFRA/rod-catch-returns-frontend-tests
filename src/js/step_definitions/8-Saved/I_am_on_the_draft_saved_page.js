'use strict'
const { Given } = require('@cucumber/cucumber')
const Review = require('../../pages/Draft-Has-Been-Saved.page')

Given('I am on the draft saved page', function () {
  Review.checkOpen()
  Review.checkMessage()
})
