'use strict'
const { defineStep } = require('@cucumber/cucumber')
const moment = require('moment')
const SmallCatch = require('../../pages/Small-Catches.page')

defineStep(/^In (.*) on the river (.*), I caught (.*) by fly, (.*) by spinner, (.*) by bait and released (.*)$/,
  async function (monthName, riverName, fly, spinner, bait, released) {
    await SmallCatch.setMonth(moment().month(monthName).format('M'))
    await SmallCatch.setRiver(riverName)
    await SmallCatch.setQuantity('fly', fly)
    await SmallCatch.setQuantity('spinner', spinner)
    await SmallCatch.setQuantity('bait', bait)
    await SmallCatch.setReleased(released)
  })
