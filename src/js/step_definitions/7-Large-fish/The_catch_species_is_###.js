'use strict'
const { Given } = require('@cucumber/cucumber')
const LargeCatch = require('../../pages/Large-Catches.page')

Given(/^The catch species is (.+)$/, function (speciesName) {
  LargeCatch.setSpecies(speciesName)
})
