'use strict'
const Page = require('./page')
const { logger } = require('defra-logging-facade')

class DeletePage extends Page {
  constructor (href) {
    super()
    this.href = href
  }

  get url () {
    return this.href
  }

  clickCancel () {
    const clickCancel = browser.element(`#return-summary`)
    clickCancel.click()
  }
}

module.exports = DeletePage
