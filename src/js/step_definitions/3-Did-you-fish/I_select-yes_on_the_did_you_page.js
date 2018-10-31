'use strict'
const { defineStep } = require('cucumber')
const DYFYN = require('../../pages/Did-you-fish.page')

defineStep('I select yes and I click continue', function () {
  DYFYN.clickDidYouFishButtons(DYFYN.didYouFishButtons.type1Button.id)
  DYFYN.continue()
})

defineStep('I select no and I click continue', function () {
  DYFYN.clickDidYouFishButtons(DYFYN.didYouFishButtons.type2Button.id)
  DYFYN.continue()
})
