'use strict'
const Page = require('./page')
const winston = require('winston')

class AddLargeFishPage extends Page {
  get url () {
    return '/catches/add'
  }

  get fishButtons () {
    return {
      type1Button: {
        id: '#type-1'
      },
      type2Button: {
        id: '#type-2'
      }
    }
  }

  get weightButtons () {
    return {
      system1Button: {
        id: '#system-1'
      },
      system2Button: {
        id: '#system-2'
      }
    }
  }

  get methodButtons () {
    return {
      method1Button: {
        id: '#method-1'
      },
      method2Button: {
        id: '#method-2'
      },
      method3Button: {
        id: '#method-3'
      }
    }
  }

  get releaseButtons () {
    return {
      release1Button: {
        id: '#released-1'
      },
      release2Button: {
        id: '#released-2'
      }
    }
  }

  selectLargeRiver () {
    const riverSelector = browser.$('#river')
    console.log('>>>>>>>' + JSON.stringify(riverSelector))
    if (riverSelector.isVisible()) {
      riverSelector.selectByValue(`rivers/2`)
      console.log(riverSelector.getValue())
    }
  }

  enterDateDay () {
    var input = browser.$('#date-day')
    console.log('>>>>>>>' + JSON.stringify(input))
    input.setValue('02')
    console.log(input.getValue()) // outputs: 'test123'
  }

  enterDateMonth () {
    var input = browser.$('#date-month')
    console.log('>>>>>>>' + JSON.stringify(input))
    input.setValue('02')
    console.log(input.getValue()) // outputs: 'test123'
  }

  enterDays () {
    var input = browser.$('#date-day')
    console.log('>>>>>>>' + JSON.stringify(input))
    input.setValue('2')
    console.log(input.getValue()) // outputs: 'test123'
  }

  enterPounds () {
    var input = browser.$('#pounds')
    console.log('>>>>>>>' + JSON.stringify(input))
    input.setValue('2')
    console.log(input.getValue()) // outputs: 'test123'
  }

  enterOunces () {
    var input = browser.$('#ounces')
    console.log('>>>>>>>' + JSON.stringify(input))
    input.setValue('2')
    console.log(input.getValue()) // outputs: 'test123'
  }

  enterKilos () {
    var input = browser.$('#kilograms')
    console.log('>>>>>>>' + JSON.stringify(input))
    input.setValue('10')
    console.log(input.getValue()) // outputs: 'test123'
  }

  clickLargeCatchButtons (buttonSelector) {
    if (buttonSelector && browser.isExisting(buttonSelector)) {
      winston.info('Clicking the button ' + buttonSelector)
      browser.click(buttonSelector)
    } else {
      winston.error('Unable to find link in Sector.page.clickLink()')
      throw new Error('Unknown Sector link')
    }
  }
}

module.exports = new AddLargeFishPage()
