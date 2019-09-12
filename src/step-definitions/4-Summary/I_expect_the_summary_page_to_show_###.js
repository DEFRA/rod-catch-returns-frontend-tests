'use strict'

const { defineStep } = require('cucumber')

const Summary = require('../../../src/pages/Summary.page')

defineStep('I expect the summary page to show the following activities', activityTable => {
  const rows = activityTable.hashes()
  Summary.checkActivityTableLength(rows.length)
  for (const row of rows) {
    Summary.checkActivityTableContains(row.River, row.DaysFishedWithMandatoryRelease, row.DaysFishedOther)
  }
})
