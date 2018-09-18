'use strict'
const Page = require('./page')
const winston = require('winston')
const waitForNav = require('../lib/wait-for-navigation-on-action')

class AddActivitiesPage extends Page {

  get url () {
    return '/activities/add'
  }

  selectRiver () {
    const riverSelector = browser.$('#river')
    console.log('>>>>>>>' + JSON.stringify(riverSelector))
    riverSelector.selectByValue(`rivers/2`)
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
