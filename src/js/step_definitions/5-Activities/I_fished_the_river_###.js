'use strict'
const {defineStep} = require('cucumber')
const Activity = require('../../pages/Add-Activities.page')

defineStep(/I fished the river (.+)$/, function (riverName) {
  Activity.selectRiver(riverName)
})
