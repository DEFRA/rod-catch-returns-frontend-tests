'use strict'
const Page = require('./page')

class ReviewPage extends Page {
  get url () {
    return '/review'
  }

  async clickCancel () {
    const clickCancel = browser.element('#return-summary')
    await clickCancel.click()
  }
}

module.exports = new ReviewPage()
