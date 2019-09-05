'use strict'
const Page = require('./page')

class AdminLoginPage extends Page {
  get url () {
    return '/login'
  }

  setUsername (username) {
    $('input#user').setValue(username)
  }

  setPassword (password) {
    $('input#password').setValue(password)
  }

  submit (username, password) {
    this.setUsername(username)
    this.setPassword(password)
    this.continue()
  }
}

module.exports = new AdminLoginPage()
