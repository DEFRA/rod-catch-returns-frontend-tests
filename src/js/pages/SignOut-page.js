'use strict'
const Page = require('./page')

class SignOutPage extends Page {
  get url () {
    return '/logout'
  }

ClickSignOut() {
  const link = $('=Sign out')
  link.click()
}
 }

module.exports = new SignOutPage()
