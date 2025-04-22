'use strict'
const { defineStep } = require("@cucumber/cucumber")
const SignOutPage = require('../../pages/SignOut-page')

defineStep('I click on Sign out', async function () {
  await SignOutPage.ClickSignOut()
})
