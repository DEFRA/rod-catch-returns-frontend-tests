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

  async clickCancel () {
    const clickCancel = await browser.element('#return-summary')
    await clickCancel.click()
  }
}

module.exports = DeletePage
