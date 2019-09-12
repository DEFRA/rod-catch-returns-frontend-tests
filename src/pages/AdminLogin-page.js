'use strict'

const Page = require('./page')

const USER_ID = '#user'
const PASSWORD_ID = '#password'

class AdminLoginPage extends Page {
  get url () {
    return '/login'
  }

  setUsername (username) {
    this.enter(USER_ID, username)
  }

  setPassword (password) {
    this.enter(PASSWORD_ID, password)
  }

  submit (username, password) {
    this.setUsername(username)
    this.setPassword(password)
    this.clickContinue()
  }
}

module.exports = new AdminLoginPage()
