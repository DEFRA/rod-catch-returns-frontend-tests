'use strict'
const Page = require('./page')
const winston = require('winston')
const waitForNav = require('../lib/wait-for-navigation-on-action')

class DeletePage extends Page {
  constructor(href) {
    super()
    this.href = href
  }

  get url () {
    return this.href
  }

  clickCancel () {
    console.log('About to click Cancel')
    const clickCancel = browser.element(`#return-summary`)
    waitForNav(function () {
      clickCancel.click()
    })
  }
}

module.exports = DeletePage
