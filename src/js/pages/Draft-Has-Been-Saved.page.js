'use strict'
const Page = require('./page')
const winston = require('winston')
const waitForNav = require('../lib/wait-for-navigation-on-action')

class SavePage extends Page {
  get url () {
    return '/save'
  }

  clickDraftSave () {
    console.log('About to click Return to licence page')
    const clickDraftSave = browser.element(`#continue`)
    waitForNav(function () {
      clickDraftSave.click()
    })
  }
}

module.exports = new SavePage()
