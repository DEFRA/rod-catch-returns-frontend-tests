'use strict'
const { defineStep } = require("@cucumber/cucumber")
const LicencePage = require('../../pages/Licence-page')

defineStep('I am on the licence entry page', async function () {
  const rcrMarker = await $('#rcrMarker')
  console.log('rcrMarker:', rcrMarker)
  await LicencePage.checkOpen()
})
