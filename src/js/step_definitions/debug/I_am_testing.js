'use strict'
const { defineStep } = require("@cucumber/cucumber")
const DebugPage = require('../../pages/debug.page')
const { logger } = require('defra-logging-facade')

defineStep('I go to GOV.UK', async function () {
  logger.info(`Beginning debug run`)
  await DebugPage.open()
})

defineStep('I am on GOV.UK', async function () {
  await DebugPage.checkOpen()
})

defineStep('It successfully loads GOV.UK', async function () {
  expect(browser).toHaveTitleContaining('Welcome to GOV.UK')
})
