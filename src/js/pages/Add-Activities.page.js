const Page = require('./page')

class AddActivitiesPage extends Page {
  get url () {
    return '/activities/add'
  }

  selectRiver (riverName) {
    $('#river').setValue(riverName)
  }

  setDaysFishedWithMandatoryRelease (days) {
    $('#daysFishedWithMandatoryRelease').setValue(days)
  }

  setDaysFishedOther (days) {
    $('#daysFishedOther').setValue(days)
  }
}

module.exports = new AddActivitiesPage()
