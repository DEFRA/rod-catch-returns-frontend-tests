'use strict'
const { defineStep } = require('cucumber')
const DeleteLargeFish = require('../../pages/Delete.page')

defineStep('I am on the delete large catches page and I click delete', function () {
  DeleteLargeFish.checkOpen()
  DeleteLargeFish.continue()
})
