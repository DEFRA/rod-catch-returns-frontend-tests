'use strict'
const Page = require('./page')

class AddSmallFishPage extends Page {
  get url () {
    return '/small-catches/add'
  }

  async setRiver (riverName) {
    if ($('#river').isDisplayed()) {
      const riverSelector = $('#river')
      await riverSelector.selectByVisibleText(riverName)
    } else {
      // No river chooser visible, ensure that the river has been preselected and is in the title (this happens with only a single activity defined)
      const pageHeading = $('h1')
      if (!pageHeading.getText().includes(`river ${riverName}`)) {
        throw new Error(`Expected ${riverName} to be preselected but it wasn't!`)
      }
    }
  }

  async setMonth (monthNumber) {
    await $('#month').setValue(monthNumber)
  }

  async setQuantity (quantityMethod, quantity) {
    const selector = '#' + quantityMethod.toLowerCase()
    await $(selector).setValue(quantity)
  }

  async setReleased (numberReleased) {
    await $('#released').setValue(numberReleased)
  }

  async saveAndAddAnother () {
    await this.clickNavigationLink('//*[@name="add"]')
  }
}

module.exports = new AddSmallFishPage()
