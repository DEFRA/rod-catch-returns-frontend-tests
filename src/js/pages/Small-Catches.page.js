'use strict'
const Page = require('./page')
const winston = require('winston')
const waitForNav = require('../lib/wait-for-navigation-on-action')

class AddSmallFishPage extends Page {

  get url () {
    return '/small-catches/add'
  }

  selectRiver () {
    const riverSelector = browser.$('#river')
    console.log('>>>>>>>' + JSON.stringify(riverSelector))
    if (riverSelector.isVisible()) {
      riverSelector.selectByValue(`rivers/2`)
      console.log(riverSelector.getValue())
    }
  }
  selectMonth () {
    const monthSelector = browser.$('#month')
    console.log('>>>>>>>' + JSON.stringify(monthSelector))
    monthSelector.selectByValue(`FEBRUARY`)
    console.log(monthSelector.getValue())
  }
  enterFlyDays () {
    var input = browser.$('#fly')
    console.log('>>>>>>>' + JSON.stringify(input))
    input.setValue('2')
    console.log(input.getValue()) // outputs: 'test123'
  }
  enterSpinDays () {
    var input = browser.$('#spinner')
    console.log('>>>>>>>' + JSON.stringify(input))
    input.setValue('2')
    console.log(input.getValue()) // outputs: 'test123'
  }
  enterBaitDays () {
    var input = browser.$('#bait')
    console.log('>>>>>>>' + JSON.stringify(input))
    input.setValue('2')
    console.log(input.getValue()) // outputs: 'test123'
  }
  enterNoRelease () {
    var input = browser.$('#released')
    console.log('>>>>>>>' + JSON.stringify(input))
    input.setValue('2')
    console.log(input.getValue()) // outputs: 'test123'
  }

}

module.exports = new AddSmallFishPage()
