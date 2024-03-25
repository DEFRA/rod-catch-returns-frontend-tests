'use strict'
const { Given } = require('@cucumber/cucumber')
const DYF = require('../../pages/Did-you-fish.page')

Given(/^I (did|didn't) fish during the season$/, async (didThey) => {
  await DYF.checkOpen()
  await DYF.setFished(didThey === 'did')
  await DYF.continue()
})
