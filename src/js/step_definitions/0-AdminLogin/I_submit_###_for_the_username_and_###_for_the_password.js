'use strict'
const { defineStep } = require('@cucumber/cucumber')
const AdminLoginPage = require('../../pages/AdminLogin-page')

defineStep(/I submit (.*) for username and (.*) for the password/, async (username, password) => {
  await AdminLoginPage.submit(username, password)
})
