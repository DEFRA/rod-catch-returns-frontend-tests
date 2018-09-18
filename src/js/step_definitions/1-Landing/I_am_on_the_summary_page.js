'use strict'
const {defineStep} = require('cucumber')
const Summary = require('../../pages/Summary.page')

defineStep('I am on the summary page and select the large catch link', function () {
  Summary.open()
  Summary.checkOpen()
  Summary.clickAddLargeCatch()
})

defineStep('I am on the summary page and select the small catch link', function () {
  Summary.open()
  Summary.checkOpen()
  Summary.clickAddSmallCatch()
})

defineStep('I am on the summary page and I click review catch return', function () {
  Summary.open()
  Summary.checkOpen()
  Summary.continue()
})
