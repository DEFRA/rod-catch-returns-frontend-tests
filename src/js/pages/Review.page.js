'use strict'
const { isWildcard } = require('../lib/utils')
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

    const rows = await table.$$('tbody tr')
    const expectedRows = dataTable.raw().slice(1) // Skip the first row (headers), we just want to validate the content

    for (let i = 0; i < expectedRows.length; i++) {
      const expectedRow = expectedRows[i]
      const row = rows[i]

      const cells = await row.$$('th, td') // first cell is <th>, rest are <td>

      for (let j = 0; j < expectedRow.length; j++) {
        const expected = expectedRow[j]
        if (isWildcard(expected)) continue
        const actualText = await cells[j].getText()
        expect(actualText).toEqual(expected)
      }
    }
  }
}

module.exports = new ReviewPage()
