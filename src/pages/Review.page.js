'use strict'
const Page = require('./page')

class ReviewPage extends Page {
  get url () {
    return '/review'
  }

  clickCancel () {
    const clickCancel = $('#return-summary')
    clickCancel.click()
  }
}

module.exports = new ReviewPage()
