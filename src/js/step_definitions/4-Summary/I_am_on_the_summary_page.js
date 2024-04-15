'use strict'
const { defineStep } = require("@cucumber/cucumber")
const Summary = require('../../pages/Summary.page')

defineStep('I am on the summary page and select the add river link', async function () {
  await Summary.checkOpen()
  await Summary.clickAddRiver()
})

defineStep('I am on the summary page and select the large catch link', async function () {
  await Summary.checkOpen()
  await Summary.clickAddLargeCatch()
})

defineStep('I am on the summary page and select the small catch link', async function () {
  await Summary.checkOpen()
  await Summary.clickAddSmallCatch()
})

defineStep('I am on the summary page and I click review catch return', async function () {
  await Summary.checkOpen()
  await Summary.continue()
})

defineStep('I am on the summary page and I save and exit the service', async function () {
  await Summary.checkOpen()
  await Summary.clickSaveAsDraft()
})

defineStep('I am on the summary page and I continue to the review page', async function () {
  await Summary.continue()
})
defineStep('I am on the summary page and I click delete large catch link', async function () {
  await Summary.checkOpen()
  await Summary.clickDeleteLargeCatch()
})

defineStep('I am on the summary page and I click delete small catch link', async function () {
  await Summary.checkOpen()
  await Summary.clickDeleteSmallCatch()
})

defineStep('I am on the summary page and I click delete river link', async function () {
  await Summary.checkOpen()
  await Summary.clickDeleteRiver()
})

defineStep('I am on the summary page', async function () {
  await Summary.checkOpen()
})
