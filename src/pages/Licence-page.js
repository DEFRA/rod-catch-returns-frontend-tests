'use strict'

const Page = require('./page')

const LICENCE_ID = '#licence'
const POSTCODE_ID = '#postcode'

class LicenceEntryPage extends Page {
  get url () {
    return browser.options.baseUrl === 'http://localhost:4000' ? '/licence' : '/licence-auth'
  }

  submit (licence, postcode) {
    licence ? this.enter(LICENCE_ID, licence) : this.clear(LICENCE_ID)
    postcode ? this.enter(POSTCODE_ID, postcode) : this.clear(POSTCODE_ID)
    this.clickContinue()
  }
}

module.exports = new LicenceEntryPage()
