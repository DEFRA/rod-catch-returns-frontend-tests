'use strict'
const { defineStep } = require("@cucumber/cucumber")
const DebugPage = require('../../pages/debug.page')
const InternalDebugPage = require('../../pages/internalDebug.page')
const DebugRcrProdPage = require('../../pages/DebugRcrProd.page')
const DebugRcrDevPage = require('../../pages/DebugRcrDev.page')
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

defineStep('I go to RCR prod', async function () {
  logger.info(`Loading RCR prod`)
  await DebugRcrProdPage.open()
})

defineStep('I am on RCR prod', async function () {
  await DebugRcrProdPage.checkOpen()
})

defineStep('It successfully loads RCR prod', async function () {
  expect(browser).toHaveTitleContaining('Enter your licence details and postcode')
})


defineStep('I go to RCR dev', async function () {
  logger.info(`Loading RCR dev`)
  await DebugRcrDevPage.open()
})

defineStep('I am on RCR dev', async function () {
  await DebugRcrDevPage.checkOpen()
})

defineStep('It successfully loads RCR dev', async function () {
  expect(browser).toHaveTitleContaining('Enter your licence details and postcode')
})

defineStep('I can query the RCR API', async function() {
  logger.info('Querying RCR API')
  await InternalDebugPage.open()
})
