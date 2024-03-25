'use strict'
const { Given } = require('@cucumber/cucumber')
const SignOutPage = require('../../pages/SignOut-page')

Given('I click on Sign out', function () {
  SignOutPage.ClickSignOut()
})
