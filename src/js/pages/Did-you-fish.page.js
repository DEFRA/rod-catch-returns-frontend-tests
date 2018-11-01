'use strict'
const Page = require('./page')

const SELECTOR_FISHED_YES = '#dyf-1'
const SELECTOR_FISHED_NO = '#dyf-2'

class SelectDYFPage extends Page {
  get url () {
    return '/did-you-fish'
  }

  setFished (fished) {
    Page.clickRadioButton(fished ? SELECTOR_FISHED_YES : SELECTOR_FISHED_NO)
  }
}

module.exports = new SelectDYFPage()
