'use strict'
const {defineStep} = require('cucumber')
const DYF = require('../../pages/Did-you-fish.page')

defineStep('I am on the did you fish page', function () {
  DYF.open()
  DYF.checkOpen()
})
