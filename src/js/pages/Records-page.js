'use strict'
const Page = require('./page')

class RecordsPage extends Page {
  get url () {
    return '/records'
  }

  async clickRecords () {
    const link = $('=Records')
    await link.click()
  }

  async enterLicense (license) {
    await $('input#licenceNumber').setValue(license)
  }

  async errorMessage () {
    if (!$('#licenceNumber-error').getText().includes('The licence number could not be matched')) {
      throw new Error('license is accepted')
    }
  }

  async clickContinue () {
    const button = $('[name="continue"]')
    await button.click()
  }
}

module.exports = new RecordsPage()
