'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Delete = require('../../pages/Delete.page')

defineStep('I am on the delete activities page and I click delete', async function () {
  const ActivityDelete = new Delete('/delete/activities')
  await ActivityDelete.checkOpen()
  await ActivityDelete.clickDelete()
})
