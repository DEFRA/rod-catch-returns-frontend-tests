import Page from './page'

class LicenceEntryPage extends Page {
  get url () {
    let ref = '/licence-auth'
    // TODO: This is a temporary workaround - ideally the frontend would serve the licence page for both external and admin journeys using /licence
    if (browser.options.baseUrl === browser.options.baseAdminUrl) {
      ref = '/licence'
    }
    return ref
  }

  get licence () { return $('#licence') }
  get postcode () { return $('#postcode') }

  async enterLicence (licenceValue) {
    if (licenceValue) {
      await this.licence.setValue(licenceValue)
    } else {
      await this.licence.clearValue()
    }
  }

  async enterPostcode (postcodeValue) {
    if (postcodeValue) {
      await this.postcode.setValue(postcodeValue)
    } else {
      await this.postcode.clearValue()
    }
  }

  async submit (licence, postcode) {
    await this.enterLicence(licence)
    await this.enterPostcode(postcode)
    await this.continue()
  }
}

export default new LicenceEntryPage()
