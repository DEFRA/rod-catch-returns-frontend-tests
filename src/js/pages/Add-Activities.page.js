const Page = require('./asyncPage.js')

class AddActivitiesPage extends Page {
  get url () {
    return '/activities/add'
  }

  async selectRiver (riverName) {
    const river = await $('#river')
    await river.click()
    await river.addValue(riverName)
  }

  async setDaysFishedWithMandatoryRelease (days) {
    const dfwmr = await $('#daysFishedWithMandatoryRelease')
    await dfwmr.setValue(days)
  }

  async setDaysFishedOther (days) {
    const dfo = await $('#daysFishedOther')
    await dfo.setValue(days)
  }
}

module.exports = new AddActivitiesPage()
