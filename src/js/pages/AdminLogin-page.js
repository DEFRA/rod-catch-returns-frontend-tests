'use strict'
const Page = require('./page')

class AdminLoginPage extends Page {
  get url () {
    return '/login'
  }

  async setUsername (username) {
    await $('input[type="email"]').setValue(username)
  }

  async setPassword (password) {
    await $('input[type="password"]').setValue(password)
  }

  async next () {
    await $('input[type="submit"]').click()
  }
}

module.exports = new AdminLoginPage()
