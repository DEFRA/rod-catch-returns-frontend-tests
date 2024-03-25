'use strict'
const { Given } = require('@cucumber/cucumber')
const Summary = require('../../pages/Summary.page')

Given('I am on the summary page and select the add river link', function () {
  Summary.checkOpen()
  Summary.clickAddRiver()
})

Given('I am on the summary page and select the large catch link', function () {
  Summary.checkOpen()
  Summary.clickAddLargeCatch()
})

Given('I am on the summary page and select the small catch link', function () {
  Summary.checkOpen()
  Summary.clickAddSmallCatch()
})

Given('I am on the summary page and I click review catch return', function () {
  Summary.checkOpen()
  Summary.continue()
})

Given('I am on the summary page and I save and exit the service', function () {
  Summary.checkOpen()
  Summary.clickSaveAsDraft()
})

Given('I am on the summary page and I continue to the review page', function () {
  Summary.continue()
})
Given('I am on the summary page and I click delete large catch link', function () {
  Summary.checkOpen()
  Summary.clickDeleteLargeCatch()
})

Given('I am on the summary page and I click delete small catch link', function () {
  Summary.checkOpen()
  Summary.clickDeleteSmallCatch()
})

Given('I am on the summary page and I click delete river link', function () {
  Summary.checkOpen()
  Summary.clickDeleteRiver()
})

Given('I am on the summary page', function () {
  Summary.checkOpen()
})
