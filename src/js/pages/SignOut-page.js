'use strict'
const Page = require('./page')

class SignOutPage extends Page {
  get url () {
    return '/logout'
  }

  async ClickSignOut () {
    const link = $('=Sign out')
    await link.click()
  }
}

module.exports = new SignOutPage()
