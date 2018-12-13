'use strict'
const { defineStep } = require('cucumber')
const AdminLoginPage = require('../../pages/AdminLogin-page')

defineStep('I am on the admin login page', function () {
  AdminLoginPage.checkOpen()
})
