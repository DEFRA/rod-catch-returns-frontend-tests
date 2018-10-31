'use strict'
const Page = require('./page')
const { logger } = require('defra-logging-facade')

class ReviewPage extends Page {
  get url () {
    return '/review'
  }

  clickCancel () {
    logger.log('About to click Cancel link')
    const clickCancel = browser.element(`#return-summary`)
    clickCancel.click()
  }
}

module.exports = new ReviewPage()
