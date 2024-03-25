'use strict'
const { Given } = require('@cucumber/cucumber')
const Activity = require('../../pages/Add-Activities.page')

Given('I confirm my activity details and continue', function () {
  Activity.continue()
})
