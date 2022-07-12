const Page = require('./page')

class AddActivitiesPage extends Page {
  get url () {
    return '/activities/add'
  }

  selectRiver (riverName) {
    // $('#river').setValue(riverName)
    $('#river').value = riverName
  }

  setDaysFishedWithMandatoryRelease (days) {
    // $('#daysFishedWithMandatoryRelease').setValue(days)
    $('#daysFishedWithMandatoryRelease').setAttribute('value', days)
  }

  setDaysFishedOther (days) {
    // $('#daysFishedOther').setValue(days)
    $('#daysFishedOther').setAttribute('value', days)
  }
}

module.exports = new AddActivitiesPage()
