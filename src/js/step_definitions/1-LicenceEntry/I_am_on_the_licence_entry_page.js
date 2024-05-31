'use strict'
const { defineStep } = require("@cucumber/cucumber")
const LicencePage = require('../../pages/Licence-page')

defineStep('I am on the licence entry page', async function () {
  console.log('browser.options.baseUrl', browser.options.baseUrl)
  await LicencePage.checkOpen()
  try {
    await browser.saveScreenshot('/var/lib/jenkins/jobs/RCR_DEV_RUN_AC_TESTS/workspace/licence-page.png')
    console.log('saved screenshot')
  } catch (e) {
    console.log('error saving screenshot: ', e)
  }
})
