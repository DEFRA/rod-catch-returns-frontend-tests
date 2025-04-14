'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Delete = require('../../pages/Delete.page')

defineStep('I am on the delete large catches page and I click delete', async function () {
  const LargeCatchDelete = new Delete('/delete/catches')
  await LargeCatchDelete.checkOpen()
  await LargeCatchDelete.clickDelete()
})
