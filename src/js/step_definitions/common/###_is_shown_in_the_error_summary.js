'use strict'
const { defineStep } = require('@cucumber/cucumber')

defineStep(/(.*) is shown in the error summary/, async (expectedMessage) => {
  const errorSummarySelector = '.govuk-error-summary__list li a'
  const errorElements = await $$(errorSummarySelector)

  const errorMessages = await errorElements.map(el => el.getText())

  expect(errorMessages).toContainEqual(expectedMessage)
})
