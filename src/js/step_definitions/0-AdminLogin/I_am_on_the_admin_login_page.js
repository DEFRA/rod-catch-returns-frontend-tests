'use strict'
const { Given } = require('@cucumber/cucumber')
const AdminLoginPage = require('../../pages/AdminLogin-page')

Given('I am on the admin login page', function () {
  AdminLoginPage.checkOpen()
})
