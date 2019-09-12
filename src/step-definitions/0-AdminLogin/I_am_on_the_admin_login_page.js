'use strict'

const { defineStep } = require('cucumber')

const AdminLoginPage = require('../../../src/pages/AdminLogin-page')

defineStep('I am on the admin login page', () => {
  AdminLoginPage.checkUrl()
})
