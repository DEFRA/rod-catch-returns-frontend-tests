const Page = require('./page')

class AddActivitiesPage extends Page {
  get url () {
    return '/activities/add'
  }

  selectRiver (riverName) {
    browser.$('#river').selectByVisibleText(riverName)
  }

  setDaysFishedWithMandatoryRelease (days) {
    browser.$('#daysFishedWithMandatoryRelease').setValue(days)
  }

  setDaysFishedOther (days) {
    browser.$('#daysFishedOther').setValue(days)
  }
}

module.exports = new AddActivitiesPage()
