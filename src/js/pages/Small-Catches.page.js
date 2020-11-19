'use strict'
const Page = require('./page')

class AddSmallFishPage extends Page {
  get url () {
    return '/small-catches/add'
  }

  setRiver (riverName) {
    if ($('#river').isDisplayed()) {
      const riverSelector = $('#river')
      riverSelector.selectByVisibleText(riverName)
    } else {
      // No river chooser visible, ensure that the river has been preselected and is in the title (this happens with only a single activity defined)
      let pageHeading = browser.$('h1')
      if (!pageHeading.getText().includes(`river ${riverName}`)) {
        throw new Error(`Expected ${riverName} to be preselected but it wasn't!`)
      }
    }
  }

  setMonth (monthNumber) {
    browser.$('#month').setValue(monthNumber)
  }

  setQuantity (quantityMethod, quantity) {
    let selector = '#' + quantityMethod.toLowerCase()
    browser.$(selector).setValue(quantity)
  }

  setReleased (numberReleased) {
    browser.$('#released').setValue(numberReleased)
  }

  saveAndAddAnother () {
    this.clickNavigationLink('//*[@name="add"]')
  }
}

module.exports = new AddSmallFishPage()
