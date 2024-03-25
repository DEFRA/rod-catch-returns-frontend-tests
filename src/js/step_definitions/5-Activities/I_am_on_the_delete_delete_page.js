'use strict'
const { Given } = require('@cucumber/cucumber')
const DeleteRiver = require('../../pages/Summary.page')

Given('I am on the delete river page and I click delete', function () {
  DeleteRiver.open()
  DeleteRiver.checkOpen()
  DeleteRiver.clickDeleteRiver()
})
