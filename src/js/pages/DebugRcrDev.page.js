'use strict'
const Page = require('./page')

class DebugRcrDevPage extends Page {
  get url () {
    return `${browser.options.baseExternalUrl}/licence-auth`
  }
}

module.exports = new DebugRcrDevPage()
