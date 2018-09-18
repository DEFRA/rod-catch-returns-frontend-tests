'use strict'
const Page = require('./page')
const winston = require('winston')
const waitForNav = require('../lib/wait-for-navigation-on-action')
let riverIndex = 1

class AddActivitiesPage extends Page {

  get url () {
    return '/activities/add'
  }

  selectRiver () {
    this.selectRiverForId(riverIndex++)
  }

  selectRiverForId (riverId) {
    const riverSelector = browser.$('#river')
    console.log('>>>>>>>' + JSON.stringify(riverSelector))
    riverSelector.selectByValue(`rivers/${riverId}`)
    console.log(riverSelector.getValue())
  }

  enterDays () {
    var input = browser.$('#days')
    console.log('>>>>>>>' + JSON.stringify(input))
    input.setValue('2')
    console.log(input.getValue()) // outputs: 'test123'
  }

}

module.exports = new AddActivitiesPage()
