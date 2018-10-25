'use strict'
const Page = require('./page')
const winston = require('winston')

class SelectSeasonPage extends Page {

  get url () {
    return '/select-year'
  }

  get seasonButton () {
    return {
      year1Button: {
        id: '#year-1'
      },
      year2Button: {
        id: '#year-2'
      }
    }
  }

  clickSeasonButtons (buttonSelector) {
    if (buttonSelector && browser.isExisting(buttonSelector)) {
      winston.info('Clicking the button ' + buttonSelector)
      browser.click(buttonSelector)
    } else {
      winston.error('Unable to find radio button')
      throw new Error('Unknown Radio Button')
    }
  }

}

module.exports = new SelectSeasonPage()
