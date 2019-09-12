'use strict'

const { defineStep } = require('cucumber')

const Activity = require('../../pages/Add-Activities.page')

defineStep('I fished the river {} for {int} days with mandatory release and {int} other days', (riverName, daysWithMandatoryRelease, daysOther) => {
  Activity.checkUrl()
  Activity.selectRiver(riverName)
  Activity.setDaysFishedWithMandatoryRelease(daysWithMandatoryRelease)
  Activity.setDaysFishedOther(daysOther)
})
