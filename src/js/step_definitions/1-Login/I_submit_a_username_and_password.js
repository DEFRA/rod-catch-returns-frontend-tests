'use strict'
const {defineStep} = require('cucumber')
const LoginPage = require('../../pages/Login-page')
defineStep('I submit a username and password', function () {
  LoginPage.submitLogin('B7A718', 'WA4 1HT')
})
