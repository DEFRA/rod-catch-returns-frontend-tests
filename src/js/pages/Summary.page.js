'use strict'
const Page = require('./page')
const winston = require('winston')
const waitForNav = require('../lib/wait-for-navigation-on-action')

class SummaryPage extends Page {
  get url () {
    return '/summary'
  }

  clickAddRIver () {
    console.log('About to click Add River Link')
    const addRiverLink = browser.element(`#activities-add`)
    waitForNav(function () {
      addRiverLink.click()
    })

  }

  clickAddSmallCatch () {
    console.log('Add a small catch of under 1 lb link')
    const addRiverLink = browser.element(`#small-catches-add`)
    waitForNav(function () {
      addRiverLink.click()
    })
  }

  clickAddLargeCatch () {
    console.log('About to click Add a salmon or large sea trout link')
    const addRiverLink = browser.element(`#catches-add`)
    waitForNav(function () {
      addRiverLink.click()
    })
  }
}

module.exports = new SummaryPage()
