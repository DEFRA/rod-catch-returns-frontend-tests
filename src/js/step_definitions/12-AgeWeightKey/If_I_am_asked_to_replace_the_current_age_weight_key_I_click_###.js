'use strict'
const { defineStep } = require('@cucumber/cucumber')
const AgeWeightKeyConflictPage = require('../../pages/Age-Weight-Key-Conflict')

defineStep(/If I am asked to replace the current age weight key I click (yes|no)/, async (option) => {
  const heading = await $('h1').getText()
  if (heading.includes('An age weight key already exists for the river in')) {
    await AgeWeightKeyConflictPage.setOverwrite(option)
    await AgeWeightKeyConflictPage.continue()
  }
})
