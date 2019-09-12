'use strict'

const Page = require('./page')

class ConfirmationPage extends Page {
  get url () {
    return '/confirmation'
  }
}

module.exports = new ConfirmationPage()
