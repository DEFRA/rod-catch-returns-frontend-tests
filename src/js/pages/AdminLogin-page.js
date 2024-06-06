'use strict'
const Page = require('./page')

class AdminLoginPage extends Page {
  get url () {
    return '/login'
  }

  async setUsername (username) {
    await $('input#user').setValue(username)
  }

  async setPassword (password) {
    await $('input#password').setValue(password)
  }

  async submit (username, password) {
    await this.setUsername(username)
    await this.setPassword(password)
    await this.continue()
  }
}

module.exports = new AdminLoginPage()
