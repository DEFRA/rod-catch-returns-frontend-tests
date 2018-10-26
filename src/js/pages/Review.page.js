'use strict'
const Page = require('./page')
const winston = require('winston')
const waitForNav = require('../lib/wait-for-navigation-on-action')

class ReviewPage extends Page {
  get url () {
    return '/review'
  }

  clickCancel () {
    console.log('About to click Cancel link')
    const clickCancel = browser.element(`#return-summary`)
    waitForNav(function () {
      clickCancel.click()
    })

  }
}
module.exports = new ReviewPage()