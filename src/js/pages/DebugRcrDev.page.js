'use strict'
const Page = require('./page')

class DebugRcrProdPage extends Page {
  get url () {
    return 'https://rcr-dev.aws.defra.cloud/licence-auth'
  }
}

module.exports = new DebugRcrProdPage()
