'use strict'

const { defineStep } = require('cucumber')

const SmallCatch = require('../../pages/Small-Catches.page')

defineStep('In {} on the river {}, I caught {int} by fly, {int} by spinner, {int} by bait and released {int}', (monthName, riverName, fly, spinner, bait, released) => {
  const month = require('moment')().month(monthName).format('M')
  SmallCatch.checkUrl()
  SmallCatch.setRiver(riverName)
  SmallCatch.setMonth(month)
  SmallCatch.setFly(fly)
  SmallCatch.setSpinner(spinner)
  SmallCatch.setBait(bait)
  SmallCatch.setReleased(released)
})
