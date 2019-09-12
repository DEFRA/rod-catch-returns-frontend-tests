'use strict'

const { defineStep } = require('cucumber')

const LargeCatch = require('../../pages/Large-Catches.page')

defineStep(/The catch species is (.+)/, speciesName => {
  LargeCatch.setSpecies(speciesName)
})
