'use strict'
const Page = require('./page')
const { validateTableByCaption } = require('../utils/table-utils')

class ReviewPage extends Page {
  get url () {
    return '/review'
  }

  async clickCancel () {
    const clickCancel = browser.element('#return-summary')
    await clickCancel.click()
  }

  async clickUnlock () {
    const unlockButton = await $('button[name="unlock"]')
    await unlockButton.click()
  }

  async validateActivitiesTable (dataTable) {
    validateTableByCaption('Rivers fished', dataTable)
  }

  async validateSmallCatchesTable (dataTable) {
    validateTableByCaption('Small adult sea trout (1lb and under)', dataTable)
  }

  async validateLargeCatchesTable (dataTable) {
    validateTableByCaption('Salmon and large adult sea trout', dataTable)
  }
}

module.exports = new ReviewPage()
