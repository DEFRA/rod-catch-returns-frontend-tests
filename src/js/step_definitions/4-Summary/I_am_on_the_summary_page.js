'use strict'
const {defineStep} = require('cucumber')
const Summary = require('../../pages/Summary.page')


defineStep('I am on the summary page and select the add river link', function () {
  Summary.checkOpen()
  Summary.clickAddRIver()
})

defineStep('I am on the summary page and select the large catch link', function () {
  Summary.checkOpen()
  Summary.clickAddLargeCatch()
})

defineStep('I am on the summary page and select the small catch link', function () {
  Summary.checkOpen()
  Summary.clickAddSmallCatch()
})

defineStep('I am on the summary page and I click review catch return', function () {
  Summary.checkOpen()
  Summary.continue()
})

defineStep('I am on the summary page and I save and exit the service', function () {
  Summary.checkOpen()
  Summary.clickSaveAsDraft()
})

defineStep('I am on the summary page and I continue to the review page', function () {
  Summary.continue()
})
defineStep('I am on the summary page and I click delete large catch link', function () {
  Summary.checkOpen()
  Summary.clickDeleteLargeCatch()
})

defineStep('I am on the summary page and I click delete small catch link', function () {
  Summary.checkOpen()
  Summary.clickDeleteSmallCatch()
})

defineStep('I am on the summary page and I click delete river link', function () {
  Summary.checkOpen()
  Summary.clickDeleteRiver()
})

defineStep('I am on the summary page', function () {
  Summary.checkOpen()
})
