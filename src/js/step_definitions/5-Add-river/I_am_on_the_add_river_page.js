'use strict'
const {defineStep} = require('cucumber')
const Activity = require('../../pages/Add-Activities.page')

defineStep('I am on the add river page and enter river and days', function () {
  Activity.open()
  Activity.checkOpen()
  Activity.selectRiver()
  Activity.enterDaysJan()
  Activity.enterDaysJun()
  Activity.continue()
})
