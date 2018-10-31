'use strict'
const Page = require('./page')
const { logger } = require('defra-logging-facade')

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
      logger.info('Clicking the button ' + buttonSelector)
      browser.click(buttonSelector)
    } else {
      logger.error('Unable to find radio button')
      throw new Error('Unknown Radio Button')
    }
  }
}

module.exports = new SelectDYFPage()
