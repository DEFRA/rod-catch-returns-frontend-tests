'use strict'
const { defineStep } = require("@cucumber/cucumber")
const DeleteSmallFish = require('../../pages/Delete.page')

defineStep('I am on the delete small catches page and I click delete', function () {
  DeleteSmallFish.open()
  DeleteSmallFish.checkOpen()
  DeleteSmallFish.continue()
})
