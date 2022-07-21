const Page = require('./asyncPage.js')

class AddActivitiesPage extends Page {
  get url () {
    return '/activities/add'
  }

  async selectRiver (riverName) {
    const river = await $('#river')
    await river.addValue(riverName)
  }

  async setDaysFishedWithMandatoryRelease (days) {
    console.log(`setting #daysFishedWithMandatoryRelease value to ${days}`)
    const dfwmr = await $('#daysFishedWithMandatoryRelease')
    await dfwmr.setValue(days)
    console.log(`set #daysFishedWithMandatoryRelease value to ${days}`)
  }

  async setDaysFishedOther (days) {
    console.log(`setting #daysFishedOther value to ${days}`)
    const dfo = await $('#daysFishedOther')
    await dfo.setValue(days)
    console.log(`set #daysFishedOther value to ${days}`)
  }
}

module.exports = new AddActivitiesPage()
