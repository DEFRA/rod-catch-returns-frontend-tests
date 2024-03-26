'use strict'
const { Given } = require('@cucumber/cucumber')
const DeleteLargeFish = require('../../pages/Delete.page')

Given('I am on the delete large catches page and I click delete', function () {
  DeleteLargeFish.checkOpen()
  DeleteLargeFish.continue()
})
