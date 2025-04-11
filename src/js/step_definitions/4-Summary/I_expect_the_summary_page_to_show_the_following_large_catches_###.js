'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Summary = require('../../pages/Summary.page')

defineStep('I expect the summary page to show the following large catches', async function (largeCatchesTable) {
  await Summary.validateLargeCatchTable(largeCatchesTable)
})
