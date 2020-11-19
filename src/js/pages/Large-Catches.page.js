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

  setDate (dayOfMonth, monthNumber) {
    browser.$('#day').setValue(dayOfMonth)
    browser.$('#month').setValue(monthNumber)
  }

  setRiver (riverName) {
    if ($('#river').isDisplayed()) {
      const riverSelector = $('#river')
      riverSelector.selectByVisibleText(riverName)
    } else {
      // No river chooser visible, ensure that the river has been preselected and is in the title (this happens with only a single activity defined)
      let pageHeading = $('h1')
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
    Page.clickRadioButton(released ? RADIO_RELEASED_YES_ID : RADIO_RELEASED_NO_ID)
  }

  setMethod (methodName) {
    let methodLabel = browser.$(`label=${methodName}`)
    methodLabel.click()
  }

  setMetricMass (kg) {
    Page.clickRadioButton(RADIO_METRIC_ID)
    browser.$('#kilograms').setValue(kg)
  }

  setImperialMass (lbs, oz) {
    Page.clickRadioButton(RADIO_IMPERIAL_ID)
    browser.$('#pounds').setValue(lbs)
    browser.$('#ounces').setValue(oz)
  }

  saveAndAddAnother () {
    this.clickNavigationLink('//*[@name="add"]')
  }
}

module.exports = new AddLargeFishPage()
