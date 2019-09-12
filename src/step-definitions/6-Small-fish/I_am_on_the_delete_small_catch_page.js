'use strict'

const { defineStep } = require('cucumber')

const DeleteSmallFish = require('../../../src/pages/Delete.page')

defineStep('I am on the delete small catches page and I click delete', () => {
  DeleteSmallFish.open()
  DeleteSmallFish.checkUrl()
  DeleteSmallFish.clickContinue()
})
