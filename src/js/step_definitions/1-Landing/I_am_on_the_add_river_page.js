'use strict'
const {defineStep} = require('cucumber')
const Activity = require('../../pages/Add-Activities.page')

defineStep('I enter river and days', function () {
  Activity.open()
  Activity.checkOpen()
  Activity.selectRiver()
  Activity.enterDays()
  Activity.continue()
})
