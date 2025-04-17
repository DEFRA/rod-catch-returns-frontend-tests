'use strict'
const Page = require('./page')
const { validateTableByCaption, getSmallCatchRow, getLargeCatchRow } = require('../utils/table-utils')

class ReviewPage extends Page {
  get url () {
    return '/review'
  }

  async clickCancel () {
    const clickCancel = $('#return-summary')
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

  async checkExcludeCheckboxCheckedSmallCatch (month, riverName) {
    const row = await getSmallCatchRow(month, riverName)
    const excludeCheckbox = await row.$('input[name="exclude-small-catch"]')
    await expect(excludeCheckbox).toBeChecked()
  }

  async checkExcludeCheckboxCheckedLargeCatch (riverName, type) {
    const row = await getLargeCatchRow(riverName, type)
    const excludeCheckbox = await row.$('input[name="exclude-catch"]')
    await expect(excludeCheckbox).toBeChecked()
  }

  async checkExcludeCheckboxCheckedSubmission () {
    const excludeCheckbox = await $('input[name="exclude"]')
    await expect(excludeCheckbox).toBeChecked()
  }
}

module.exports = new ReviewPage()
