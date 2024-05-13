'use strict'
const Page = require('./page')

class DebugPage extends Page {
  get url () {
    return 'https://www.gov.uk'
  }
}

module.exports = new DebugPage()
