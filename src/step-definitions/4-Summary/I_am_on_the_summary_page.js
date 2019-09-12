'use strict'

const { defineStep } = require('cucumber')
const { logger } = require('defra-logging-facade')

const Summary = require('../../pages/Summary.page')

defineStep('I am on the summary page and select the add river link', () => {
  logger.debug('About to click Add River Link')

  Summary.checkUrl()
  Summary.clickAddRiver()
})

defineStep('I am on the summary page and select the small catch link', () => {
  logger.debug('Add a small catch of under 1 lb link')

  Summary.checkUrl()
  Summary.clickAddSmallCatch()
})

defineStep('I am on the summary page and select the large catch link', () => {
  logger.debug('About to click Add a salmon or large sea trout link')

  Summary.checkUrl()
  Summary.clickAddLargeCatch()
})

defineStep('I am on the summary page and I click delete river link', () => {
  logger.debug('About to click Delete River Link')

  Summary.checkUrl()
  Summary.clickDeleteRiver()
})

defineStep('I am on the summary page and I click delete small catch link', () => {
  logger.debug('Delete small catch')

  Summary.checkUrl()
  Summary.clickDeleteSmallCatch()
})

defineStep('I am on the summary page and I click delete large catch link', () => {
  logger.debug('About to click Add a salmon or large sea trout link')

  Summary.checkUrl()
  Summary.clickDeleteLargeCatch()
})

defineStep('I am on the summary page and I save and exit the service', () => {
  logger.debug('About to click Save as draft')

  Summary.checkUrl()
  Summary.clickSaveAsDraft()
})

defineStep('I am on the summary page and I click review catch return', () => {
  Summary.checkUrl()
  Summary.clickContinue()
})
