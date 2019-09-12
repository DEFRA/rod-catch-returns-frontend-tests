'use strict'

const Page = require('./page')

class SelectSeasonPage extends Page {
  get url () {
    return '/select-year'
  }

  submit (year) {
    this.click(`input[value='${year}']`)
    this.clickContinue()
  }
}

module.exports = new SelectSeasonPage()
