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

module.exports = {
  validateTableByCaption
}
