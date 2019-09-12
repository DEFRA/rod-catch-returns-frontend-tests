'use strict'

const Page = require('./page')

class DeletePage extends Page {
  constructor (href) {
    super()
    this.href = href
  }

  get url () {
    return this.href
  }
}

module.exports = DeletePage
