'use strict'
const {defineStep} = require('cucumber')
const Review = require('../../pages/Draft-Has-Been-Saved.page')

defineStep('I am on the draft saved page and I click the return to licence page', function () {
  Review.open
  Review.checkOpen()
  Review.clickDraftSave()
})
