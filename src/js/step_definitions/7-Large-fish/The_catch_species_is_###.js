'use strict'
const { defineStep } = require("@cucumber/cucumber")
const LargeCatch = require('../../pages/Large-Catches.page')

defineStep(/^The catch species is (.+)$/, async function (speciesName) {
  await LargeCatch.setSpecies(speciesName)
})
