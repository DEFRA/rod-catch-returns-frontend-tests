'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Delete = require('../../pages/Delete.page')

defineStep('I confirm I want to delete the activity', async function () {
  const ActivityDelete = new Delete('/delete/activities')
  await ActivityDelete.checkOpen()
  await ActivityDelete.clickDelete()
})
