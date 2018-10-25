'use strict'
const Page = require('./page')
const winston = require('winston')

class SelectDYFPage extends Page {
  get url () {
    return '/did-you-fish'
  }

  get didYouFishButtons () {
    return {
      type1Button: {
        id: '#dyf-1'
      },
      type2Button: {
        id: '#dyf-2'
      }
    }
  }

  clickDidYouFishButtons (buttonSelector) {
    if (buttonSelector && browser.isExisting(buttonSelector)) {
      winston.info('Clicking the button ' + buttonSelector)
      browser.click(buttonSelector)
    } else {
      winston.error('Unable to find radio button')
      throw new Error('Unknown Radio Button')
    }
  }
}

module.exports = new SelectDYFPage()
