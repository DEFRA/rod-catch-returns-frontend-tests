'use strict'
const Page = require('./page')

class AgeWeightKeyPage extends Page {
  get url () {
    return '/age-weight-key'
  }

  async clickAgeWeightKeyLink () {
    const link = await $('=Age weight key')
    await link.click()
  }

  async selectGate (gate) {
    const radioButton = await $('label=Dee').parentElement().$('input[type="radio"]')
    await radioButton.click()
  }
}

module.exports = new AgeWeightKeyPage()
