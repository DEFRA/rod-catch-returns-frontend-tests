'use strict'
const { defineStep } = require("@cucumber/cucumber")
const Review = require('../../pages/Draft-Has-Been-Saved.page')

defineStep('I am on the draft saved page', function () {
  Review.checkOpen()
  Review.checkMessage()
})
