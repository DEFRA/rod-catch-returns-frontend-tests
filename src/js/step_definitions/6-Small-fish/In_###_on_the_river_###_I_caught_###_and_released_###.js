'use strict'
const {defineStep} = require('cucumber')
const SmallCatch = require('../../pages/Small-Catches.page')
const util = require('util')
const winston = require('winston')

defineStep(/^In (.*) on the river (.*), I caught (\d+) by fly, (\d+) by spinner, (\d+) by bait and released (\d+)$/,
  function (monthName, riverName, fly, spinner, bait, released) {
    SmallCatch.setMonth(monthName)
    SmallCatch.setRiver(riverName)
    SmallCatch.setQuantity('fly', fly)
    SmallCatch.setQuantity('spinner', spinner)
    SmallCatch.setQuantity('bait', bait)
    SmallCatch.setReleased(released)
  })
