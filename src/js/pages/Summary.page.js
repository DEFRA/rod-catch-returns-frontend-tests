'use strict'
const Page = require('./page')
const { logger } = require('defra-logging-facade')
const DeletePage = require('./Delete.page')
const { expect } = require('chai')

class SummaryPage extends Page {
  get url () {
    return '/summary'
  }

  clickAddRIver () {
    logger.log('About to click Add River Link')
    const addRiverLink = browser.element(`#activities-add`)
    addRiverLink.click()
  }

  clickAddSmallCatch () {
    logger.log('Add a small catch of under 1 lb link')
    const addSmallCatchLink = browser.element(`#small-catches-add`)
    addSmallCatchLink.click()
  }

  clickAddLargeCatch () {
    logger.log('About to click Add a salmon or large sea trout link')
    const clickLargeCatchLink = browser.element(`#catches-add`)
    clickLargeCatchLink.click()
  }

  clickDeleteRiver () {
    logger.log('About to click Delete River Link')
    const clickDeleteRiverLink = browser.element('table#river tr:first-child td:nth-child(5) span a:nth-child(2)')
    let deleteRiverPage = new DeletePage(clickDeleteRiverLink.getAttribute('href'))
    clickDeleteRiverLink.click()
    deleteRiverPage.continue()
  }

  clickDeleteSmallCatch () {
    logger.log('Delete small catch')
    const clickDeleteSmallCatch = browser.element('table#small tr:first-child td:nth-child(7) span a:nth-child(2)')
    let deleteSmallPage = new DeletePage(clickDeleteSmallCatch.getAttribute('href'))
    clickDeleteSmallCatch.click()
    deleteSmallPage.continue()
  }

  clickDeleteLargeCatch () {
    logger.log('About to click Add a salmon or large sea trout link')
    const clickDeleteLargeCatch = browser.element('table#large tr:first-child td:nth-child(7) span a:nth-child(2)')
    let deleteLargePage = new DeletePage(clickDeleteRiverLink.getAttribute('href'))
    clickDeleteLargeCatch.click()
    deleteLargePage.continue()
  }

  clickSaveAsDraft () {
    logger.log('About to click Save as draft')
    const clickSaveAsDraftLink = browser.element(`#save`)
    clickSaveAsDraftLink.click()
  }

  checkActivityTableLength (expectedLength) {
    const activityTableBodyRows = browser.$$('#river tbody tr')
    expect(activityTableBodyRows.length).to.equal(expectedLength)
  }

  checkActivityTableContains (riverName, daysFishedWithMandatoryRelease, daysFishedOther, fishCaught) {
    const activityTableBody = browser.$('#river tbody')
    const riverNameCell = activityTableBody.$(`td=${riverName}`)
    const rowForRiver = riverNameCell.$('..')
    expect(rowForRiver.$('td:nth-child(2)').getText()).to.equal(daysFishedWithMandatoryRelease)
    expect(rowForRiver.$('td:nth-child(3)').getText()).to.equal(daysFishedOther)
    expect(rowForRiver.$('td:nth-child(4)').getText()).to.equal(fishCaught)
  }
}

module.exports = new SummaryPage()
