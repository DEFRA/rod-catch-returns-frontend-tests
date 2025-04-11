'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Delete = require('../../pages/Delete.page')

defineStep('I am on the delete small catches page and I click delete', async function () {
  const SmallCatchDelete = new Delete('/delete/small-catches')
  await SmallCatchDelete.checkOpen()
  await SmallCatchDelete.clickDelete()
})
