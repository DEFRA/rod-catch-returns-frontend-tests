'use strict'
const { Given } = require('@cucumber/cucumber')
const Summary = require('../../pages/Summary.page')

Given('I expect the summary page to show the following activities', function (activityTable) {
  const rows = activityTable.hashes()
  Summary.checkActivityTableLength(rows.length)
  for (const row of rows) {
    Summary.checkActivityTableContains(row.River, row.DaysFishedWithMandatoryRelease, row.DaysFishedOther)
  }
})
