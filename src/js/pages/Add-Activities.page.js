const Page = require('./page')

class AddActivitiesPage extends Page {
  get url () {
    return '/activities/add'
  }

  async selectRiver (riverName) {
    console.log(`setting #river value to ${riverName}`)
    console.log('is river entry field enabled?', await $('#river').isEnabled())
    const river = await $('#river')
    await river.setValue(riverName)
    console.log(`set #river value to ${riverName}`)
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
