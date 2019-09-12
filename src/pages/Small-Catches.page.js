'use strict'

const Page = require('./page')

const RIVER_ID = '#river'
const MONTH_ID = '#month'
const FLY_ID = '#fly'
const SPINNER_ID = '#spinner'
const BAIT_ID = '#bait'
const RELEASED_ID = '#released'

class AddSmallFishPage extends Page {
  get url () {
    return '/small-catches/add'
  }

  setRiver (riverName) {
    if ($(RIVER_ID).isDisplayed()) {
      this.select(RIVER_ID, riverName)
    } else {
      this.hasText(`river ${riverName}`)
    }
  }

  setMonth (monthNumber) {
    this.enter(MONTH_ID, monthNumber)
  }

  setFly (quantity) {
    this.enter(FLY_ID, quantity)
  }

  setSpinner (quantity) {
    this.enter(SPINNER_ID, quantity)
  }

  setBait (quantity) {
    this.enter(BAIT_ID, quantity)
  }

  setReleased (numberReleased) {
    this.enter(RELEASED_ID, numberReleased)
  }

  saveAndAddAnother () {
    this.clickAddAnother()
  }
}

module.exports = new AddSmallFishPage()
