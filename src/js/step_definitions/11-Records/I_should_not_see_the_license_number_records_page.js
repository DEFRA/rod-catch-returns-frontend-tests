'use strict'
const { Given } = require('@cucumber/cucumber')

Given('I should not see the license number records page', function () {
  expect(browser).not.toHaveTitleContaining('Enter a licence number - GOV.UK')
})
