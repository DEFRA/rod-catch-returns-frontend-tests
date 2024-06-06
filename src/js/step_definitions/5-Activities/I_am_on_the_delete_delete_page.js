'use strict'
const { defineStep } = require("@cucumber/cucumber")
const DeleteRiver = require('../../pages/Summary.page')

defineStep('I am on the delete river page and I click delete', async function () {
  await DeleteRiver.open()
  await DeleteRiver.checkOpen()
  await DeleteRiver.clickDeleteRiver()
})
