'use strict'
const Page = require('./page')

class RecordsPage extends Page {
  get url () {
    return '/records'
  }

  clickRecords () {
    const link = $('=Records')
    link.click()
  }

  enterLicense (license) {
    $('input#licenceNumber').setValue(license)
  }

  errorMessage () {
    if (!$('#licenceNumber-error').getText().includes('The licence number could not be matched')) {
      throw new Error('license is accepted')
    }
  }

  clickContinue () {
    const button = $('[name="continue"]')
    button.click()
  }
}

module.exports = new RecordsPage()
