'use strict'
const { Given } = require('@cucumber/cucumber')

Given('I should see the license number records page', function () {
  expect(browser).toHaveTitleContaining('Enter a licence number - GOV.UK')
})
