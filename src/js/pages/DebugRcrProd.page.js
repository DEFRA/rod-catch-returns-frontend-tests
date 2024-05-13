'use strict'
const Page = require('./page')

class DebugRcrProdPage extends Page {
  get url () {
    return 'https://catchreturn.service.gov.uk/licence-auth'
  }
}

module.exports = new DebugRcrProdPage()
