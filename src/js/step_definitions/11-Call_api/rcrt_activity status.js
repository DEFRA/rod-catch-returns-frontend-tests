'use strict'
const { defineStep } = require('cucumber')
const RcrRequest = require('../../pages/rcr_api_requests')

defineStep(/^I send an API request to check contact status$/, { timeout: 2000000 }, async function () {
  //generate token
  //await RcrRequest.getToken()
  // use async with await for all step definitions , assertions, page objects to avoid any timeouts or obj not found conditon due to time out
 await RcrRequest.requestCheckStatus()
})
