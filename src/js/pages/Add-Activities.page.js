const Page = require('./page')

class AddActivitiesPage extends Page {
  get url () {
    return '/activities/add'
  }

  selectRiver (riverName) {
    console.log(`setting #river value to ${riverName}`)
    console.log('is river entry field enabled?', $('#river').isEnabled())
    // $('#river').setValue(riverName)
    document.getElementById('river').value = riverName
    console.log(`set #river value to ${riverName}`)
  }

  setDaysFishedWithMandatoryRelease (days) {
    console.log(`setting #daysFishedWithMandatoryRelease value to ${days}`)
    $('#daysFishedWithMandatoryRelease').setValue(days)
    console.log(`set #daysFishedWithMandatoryRelease value to ${days}`)
  }

  setDaysFishedOther (days) {
    console.log(`setting #daysFishedOther value to ${days}`)
    $('#daysFishedOther').setValue(days)
    console.log(`set #daysFishedOther value to ${days}`)
  }
}

module.exports = new AddActivitiesPage()
