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

  enterLicence (licence) {
    const userInput = $('#licence')
    if (licence) {
      userInput.setValue(licence)
    } else {
      userInput.clearValue()
    }
  }

  enterPostcode (postcode) {
    const passInput = $('#postcode')
    if (postcode) {
      passInput.setValue(postcode)
    } else {
      passInput.clearValue()
    }
  }

  submit (licence, postcode) {
    this.enterLicence(licence)
    this.enterPostcode(postcode)
    this.continue()
  }
}

module.exports = new LicenceEntryPage()
