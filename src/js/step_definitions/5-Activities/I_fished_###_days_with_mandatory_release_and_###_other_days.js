'use strict'
const {defineStep} = require('cucumber')
const Activity = require('../../pages/Add-Activities.page')

defineStep(/I fished (\d+) days with mandatory release and (\d+) other days/, function (daysWithMandatoryRelease, daysOther) {
  Activity.setDaysFishedWithMandatoryRelease(daysWithMandatoryRelease)
  Activity.setDaysFishedOther(daysOther)
})
