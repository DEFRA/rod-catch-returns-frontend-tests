'use strict'
const Page = require('./page')

class SelectSeasonPage extends Page {
  get url () {
    return '/select-year'
  }

  async selectSeason (year) {
    await Page.clickRadioButton(`input[value='${year}']`)
  }
}

module.exports = new SelectSeasonPage()
