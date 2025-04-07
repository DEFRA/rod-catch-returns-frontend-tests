'use strict'
const Page = require('./page')

class ReviewPage extends Page {
  get url () {
    return '/review'
  }

  async clickCancel () {
    const clickCancel = browser.element('#return-summary')
    await clickCancel.click()
  }

  async validateTableByCaption (captionText, dataTable) {
    // Find the table by its caption
    const table = await $(`caption*=${captionText}`).parentElement()

    const expectedRows = dataTable.raw().slice(1) // Skip the first row (headers), we just want to validate the content
    const tbodyText = await table.$('tbody').getText() // convert table to text

    for (const row of expectedRows) {
      const rowText = row.filter(cell => cell !== '<any>').join(' ')
      expect(tbodyText).toContain(rowText) // assert table row contains text in table, because the order of the table can be random
    }
  }
}

module.exports = new ReviewPage()
