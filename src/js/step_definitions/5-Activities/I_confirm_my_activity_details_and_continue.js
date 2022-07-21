'use strict'
const { defineStep } = require("@cucumber/cucumber")
const Activity = require('../../pages/Add-Activities.page')

defineStep('I confirm my activity details and continue', function () {
  Activity.continue()
})
