'use strict'
const { defineStep } = require('cucumber')
const Season = require('../../pages/Season-Select.page')

defineStep('I am on the which season page', function () {
  Season.open()
  Season.checkOpen()
})
