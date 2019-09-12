'use strict'

const Page = require('./page')

class ReviewPage extends Page {
  get url () {
    return '/review'
  }
}

module.exports = new ReviewPage()
