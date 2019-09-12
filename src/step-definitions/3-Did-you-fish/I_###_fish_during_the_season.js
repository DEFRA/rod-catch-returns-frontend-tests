'use strict'

const { defineStep } = require('cucumber')

const DidYouFish = require('../../../src/pages/Did-you-fish.page')

defineStep(/I (did|didn't) fish during the season/, answer => {
  DidYouFish.checkUrl()
  DidYouFish.submit(answer)
})
