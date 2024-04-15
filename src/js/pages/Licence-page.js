'use strict'
const Page = require('./page')

class LicenceEntryPage extends Page {
  get url () {
    let ref = '/licence-auth'
    // TODO: This is a temporary workaround - ideally the frontend would serve the licence page for both external and admin journeys using /licence
    if (browser.options.baseUrl === browser.config.baseAdminUrl) {
      ref = '/licence'
    }
    return ref
  }

  async enterLicence (licence) {
    const userInput = $('#licence')
    if (licence) {
      await userInput.setValue(licence)
    } else {
      await userInput.clearValue()
    }
  }

  async enterPostcode (postcode) {
    const passInput = $('#postcode')
    if (postcode) {
      await passInput.setValue(postcode)
    } else {
      await passInput.clearValue()
    }
  }

  async submit (licence, postcode) {
    await this.enterLicence(licence)
    await this.enterPostcode(postcode)
    await this.continue()
  }
}

module.exports = new LicenceEntryPage()
