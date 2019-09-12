'use strict'

const { defineStep } = require('cucumber')

const Summary = require('../../pages/Summary.page')

defineStep('I am on the delete river page and I click delete', () => {
  Summary.checkUrl()
  Summary.clickDeleteRiver()
})
