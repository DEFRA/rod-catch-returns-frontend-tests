'use strict'
const { defineStep } = require("@cucumber/cucumber")
const SignOutPage = require('../../pages/SignOut-page')

defineStep('I click on Sign out', function () {
  SignOutPage.ClickSignOut()
})
