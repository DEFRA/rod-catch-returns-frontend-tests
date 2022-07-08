'use strict'
const { defineStep } = require("@cucumber/cucumber")
const Activity = require('../../pages/Add-Activities.page')

defineStep(/I fished the river (.*) for (\d+) days with mandatory release and (\d+) other days/, function (riverName, daysWithMandatoryRelease, daysOther) {
  Activity.checkOpen()
  Activity.selectRiver(riverName)
  Activity.setDaysFishedWithMandatoryRelease(daysWithMandatoryRelease)
  Activity.setDaysFishedOther(daysOther)
})
