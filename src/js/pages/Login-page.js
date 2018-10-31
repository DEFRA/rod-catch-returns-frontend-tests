'use strict'
const Page = require('./page')

class LoginPage extends Page {
  get url () {
    return '/licence'
  }

  enterUsername (licence) {
    const userInput = browser.element('#licence')
    if (licence) {
      userInput.setValue(licence)
    } else {
      userInput.clearElement()
    }
  }

  enterPassword (postcode) {
    const passInput = browser.element('#postcode')
    if (postcode) {
      passInput.setValue(postcode)
    } else {
      passInput.clearElement()
    }
  }

  submitLogin (licence, postcode) {
    this.enterUsername(licence)
    this.enterPassword(postcode)
    this.continue()
  }
}

module.exports = new LoginPage()
