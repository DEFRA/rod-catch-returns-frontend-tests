'use strict'
const Page = require('./page')

class AgeWeightKeyPageOk extends Page {
  get url () {
    return '/age-weight-key-ok'
  }

  async checkMessage () {
    const titleText = await $('main h1').getText()
    expect(titleText).toBe('Upload complete')
  }
}

module.exports = new AgeWeightKeyPageOk()
