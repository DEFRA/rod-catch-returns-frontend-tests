'use strict'

const Page = require('./page')

class SavePage extends Page {
  get url () {
    return '/save'
  }

  checkMessage () {
    this.hasElement('h1', 'Your catch return has been saved')
  }
}

module.exports = new SavePage()
