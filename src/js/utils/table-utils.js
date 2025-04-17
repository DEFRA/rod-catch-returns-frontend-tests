async function validateTableByCaption (captionText, dataTable) {
  // Find the table by its caption
  const table = await $(`caption*=${captionText}`).parentElement()

  // Assert the row count
  const expectedRowCount = dataTable.raw().length - 1
  const rows = await table.$$('tbody tr')
  expect(rows.length).toEqual(expectedRowCount)

  // Assert the data in the table
  const expectedRows = dataTable.raw().slice(1) // Skip the first row (headers), we just want to validate the content
  const tbodyText = await table.$('tbody').getText() // Convert the whole table to text
  for (const row of expectedRows) {
    const rowText = row.filter(cell => cell !== '<any>').join(' ')
    expect(tbodyText).toContain(rowText) // Assert text in table contains the specified row, because the order of the table can be random
  }
}

async function getSmallCatchRow (month, riverName) {
  const table = await $('caption*=Small adult sea trout (1lb and under)').parentElement()
  const rows = await table.$$('tbody tr')

  for (const row of rows) {
    const monthCell = await row.$('th[data-label="Month"]')
    const riverCell = await row.$('th[data-label="River"]')

    const [monthText, riverText] = await Promise.all([
      monthCell?.getText() ?? '',
      riverCell?.getText() ?? ''
    ])

    if (monthText.trim() === month && riverText.trim() === riverName) {
      return row
    }
  }

  throw new Error(`Could not find row for ${month} on ${riverName}`)
}

async function getLargeCatchRow (riverName, type) {
  const table = await $('caption*=Salmon and large adult sea trout').parentElement()
  const rows = await table.$$('tbody tr')

  for (const row of rows) {
    const riverCell = await row.$('th[data-label="River"]')
    const typeCell = await row.$('td[data-label="Type"]')

    const [riverText, typeText] = await Promise.all([
      riverCell?.getText() ?? '',
      typeCell?.getText() ?? ''
    ])

    if (riverText.trim() === riverName && typeText.trim() === type) {
      return row
    }
  }

  throw new Error(`Could not find row for ${riverName} and ${type}`)
}

module.exports = {
  validateTableByCaption,
  getSmallCatchRow,
  getLargeCatchRow
}
