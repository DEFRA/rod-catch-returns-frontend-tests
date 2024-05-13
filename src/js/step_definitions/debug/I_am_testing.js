'use strict'
const { defineStep } = require("@cucumber/cucumber")
const DebugPage = require('../../pages/debug.page')

defineStep('I am testing', async function () {
  logger.info(`Beginning debug run`)
})

defineStep('I go to GOV.UK', async function () {
  await DebugPage.checkOpen()
})

defineStep('it should load properly', async function () {
  expect(browser).toHaveTitleContaining('Welcome to GOV.UK')
})
