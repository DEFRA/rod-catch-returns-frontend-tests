'use strict'
const Page = require('./page')

const RADIO_RELEASED_YES_ID = '#released-1'
const RADIO_RELEASED_NO_ID = '#released-2'
const RADIO_IMPERIAL_ID = '#system-1'
const RADIO_METRIC_ID = '#system-2'

class AddLargeFishPage extends Page {
  get url () {
    return '/catches/add'
  }

  setDate (dayOfMonth, monthNumber) {
    browser.$('#date-day').setValue(dayOfMonth)
    browser.$('#date-month').setValue(monthNumber)
  }

  setRiver (riverName) {
    if (browser.isVisible('#river')) {
      const riverSelector = browser.$('#river')
      riverSelector.selectByVisibleText(riverName)
    } else {
      // No river chooser visible, ensure that the river has been preselected and is in the title (this happens with only a single activity defined)
      let pageHeading = browser.$('h1')
      if (!pageHeading.getText().includes(`river ${riverName}`)) {
        throw new Error(`Expected ${riverName} to be preselected but it wasn't!`)
      }
    }
  }

  setSpecies (speciesName) {
    let speciesLabel = browser.$(`label=${speciesName}`)
    speciesLabel.click()
  }

  setReleased (released) {
    let target = released ? RADIO_RELEASED_YES_ID : RADIO_RELEASED_NO_ID
    browser.$(target).click()
  }

  setMethod (methodName) {
    let methodLabel = browser.$(`label=${methodName}`)
    methodLabel.click()
  }

  setMetricMass (kg) {
    browser.$(RADIO_METRIC_ID).click()
    browser.$('#kilograms').setValue(kg)
  }

  setImperialMass (lbs, oz) {
    browser.$(RADIO_IMPERIAL_ID).click()
    browser.$('#pounds').setValue(lbs)
    browser.$('#ounces').setValue(oz)
  }

  saveAndAddAnother () {
    const element = browser.element('//*[@name="add"]')
    element.click()
  }
}

module.exports = new AddLargeFishPage()
