'use strict'
const Page = require('./page')
const ID_FISHED_YES = '#dyf-1'
const ID_FISHED_NO = '#dyf-2'

class SelectDYFPage extends Page {
  get url () {
    return '/did-you-fish'
  }

  setFished (fished) {
    if (fished) {
      browser.click(ID_FISHED_YES)
    } else {
      browser.click(ID_FISHED_NO)
    }
  }
}

module.exports = new SelectDYFPage()
