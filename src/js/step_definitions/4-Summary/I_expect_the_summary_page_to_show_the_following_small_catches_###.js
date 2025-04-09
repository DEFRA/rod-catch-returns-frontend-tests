'use strict'
const { defineStep } = require('@cucumber/cucumber')
const Summary = require('../../pages/Summary.page')

defineStep('I expect the summary page to show the following small catches', async function (smallCatchesTable) {
  await Summary.validateTableByCaption('Small adult sea trout (1lb and under)', smallCatchesTable)
})
