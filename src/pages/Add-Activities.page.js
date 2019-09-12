'use strict'

const Page = require('./page')

const RIVER_ID = '#river'
const DAYS_FISHED_JAN_JUN = '#daysFishedWithMandatoryRelease'
const DAYS_FISHED_JUN_DEC = '#daysFishedOther'

class AddActivitiesPage extends Page {
  get url () {
    return '/activities/add'
  }

  selectRiver (riverName) {
    this.select(RIVER_ID, riverName)
  }

  setDaysFishedWithMandatoryRelease (days) {
    this.enter(DAYS_FISHED_JAN_JUN, days)
  }

  setDaysFishedOther (days) {
    this.enter(DAYS_FISHED_JUN_DEC, days)
  }
}

module.exports = new AddActivitiesPage()
