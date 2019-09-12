'use strict'

const Page = require('./page')

const RIVER_ID = '#river'
const DAY_ID = '#day'
const MONTH_ID = '#month'
const IMPERIAL_ID = '#system-1'
const POUNDS_ID = '#pounds'
const OUNCES_ID = '#ounces'
const METRIC_ID = '#system-2'
const KILOGRAMS_ID = '#kilograms'
const RELEASED_YES_ID = '#released-1'
const RELEASED_NO_ID = '#released-2'

class AddLargeFishPage extends Page {
  get url () {
    return '/catches/add'
  }

  setRiver (riverName) {
    if ($(RIVER_ID).isDisplayed()) {
      this.select(RIVER_ID, riverName)
    } else {
      this.hasText(`river ${riverName}`)
    }
  }

  setDate (dayOfMonth, monthNumber) {
    this.enter(DAY_ID, dayOfMonth)
    this.enter(MONTH_ID, monthNumber)
  }

  setSpecies (speciesName) {
    this.clickLabelByText(speciesName)
  }

  setImperialMass (lbs, oz) {
    this.click(IMPERIAL_ID)
    this.enter(POUNDS_ID, lbs)
    this.enter(OUNCES_ID, oz)
  }

  setMetricMass (kg) {
    this.click(METRIC_ID)
    this.enter(KILOGRAMS_ID, kg)
  }

  setMethod (methodName) {
    this.clickLabelByText(methodName)
  }

  setReleased (released) {
    const id = released === 'was' ? RELEASED_YES_ID : RELEASED_NO_ID
    this.click(id)
  }

  saveAndAddAnother () {
    this.clickAddAnother()
  }
}

module.exports = new AddLargeFishPage()
