'use strict'
const {defineStep} = require('cucumber')
const LoginPage = require('../../pages/Login-page')
const username = process.env.RCR_USERNAME || 'B7A718'
const password = process.env.RCR_PASSWORD || 'WA4 1HT'

defineStep('I submit a username and password', function () {
  LoginPage.submitLogin(username, password)
})
