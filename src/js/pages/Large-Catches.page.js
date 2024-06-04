'use strict'
const Page = require('./page')

const RADIO_RELEASED_YES_ID = '#released'
const RADIO_RELEASED_NO_ID = '#released-2'
const RADIO_IMPERIAL_ID = '#system'
const RADIO_METRIC_ID = '#system-2'

class AddLargeFishPage extends Page {
  get url () {
    return '/catches/add'
  }

  async setDate (dayOfMonth, monthNumber) {
    await $('#day').setValue(dayOfMonth)
    await $('#month').setValue(monthNumber)
  }

  async setRiver (riverName) {
    if ((await $('#river')).isDisplayed()) {
      const riverSelector = $('#river')
      await riverSelector.selectByVisibleText(riverName)
    } else {
      // No river chooser visible, ensure that the river has been preselected and is in the title (this happens with only a single activity defined)
      const pageHeading = await $('h1')
      if (!pageHeading.getText().includes(`river ${riverName}`)) {
        throw new Error(`Expected ${riverName} to be preselected but it wasn't!`)
      }
    }
  }

  async setSpecies (speciesName) {
    const speciesLabel = $(`label=${speciesName}`)
    await speciesLabel.click()
  }

  async setReleased (released) {
    await Page.clickRadioButton(released ? RADIO_RELEASED_YES_ID : RADIO_RELEASED_NO_ID)
  }

  async setMethod (methodName) {
    const methodLabel = $(`label=${methodName}`)
    await methodLabel.click()
  }

  async setMetricMass (kg) {
    await Page.clickRadioButton(RADIO_METRIC_ID)
    await $('#kilograms').setValue(kg)
  }

  async setImperialMass (lbs, oz) {
    await Page.clickRadioButton(RADIO_IMPERIAL_ID)
    await $('#pounds').setValue(lbs)
    await $('#ounces').setValue(oz)
  }

  async saveAndAddAnother () {
    await this.clickNavigationLink('//*[@name="add"]')
  }
}

module.exports = new AddLargeFishPage()
