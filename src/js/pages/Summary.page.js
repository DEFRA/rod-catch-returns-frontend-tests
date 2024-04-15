'use strict'
const Page = require('./page')
const { logger } = require('defra-logging-facade')
const DeletePage = require('./Delete.page')
const { expect } = require('chai')

class SummaryPage extends Page {
  get url () {
    return '/summary'
  }

  async clickAddRiver () {
    logger.debug('About to click Add River Link')
    await this.clickNavigationLink('#activities-add')
  }

  async clickAddSmallCatch () {
    logger.debug('Add a small catch of under 1 lb link')
    await this.clickNavigationLink('#small-catches-add')
  }

  async clickAddLargeCatch () {
    logger.debug('About to click Add a salmon or large sea trout link')
    await this.clickNavigationLink('#catches-add')
  }

  async clickDeleteRiver () {
    logger.debug('About to click Delete River Link')
    const clickDeleteRiverLink = $('table#river tr:first-child td:nth-child(4) span a:nth-child(1)')
    const deleteRiverPage = new DeletePage(clickDeleteRiverLink.getAttribute('href'))
    await clickDeleteRiverLink.click()
    await deleteRiverPage.continue()
  }

  async clickDeleteSmallCatch () {
    logger.debug('Delete small catch')
    const clickDeleteSmallCatch = browser.element('table#small tr:first-child td:nth-child(7) span a:nth-child(2)')
    const deleteSmallPage = new DeletePage(clickDeleteSmallCatch.getAttribute('href'))
    await clickDeleteSmallCatch.click()
    await deleteSmallPage.continue()
  }

  async clickDeleteLargeCatch () {
    logger.debug('About to click Add a salmon or large sea trout link')
    const clickDeleteLargeCatch = browser.element('table#large tr:first-child td:nth-child(7) span a:nth-child(2)')
    const deleteLargePage = new DeletePage(clickDeleteLargeCatch.getAttribute('href'))
    await clickDeleteLargeCatch.click()
    await deleteLargePage.continue()
  }

  async clickSaveAsDraft () {
    logger.debug('About to click Save as draft')
    await this.clickNavigationLink('#save')
  }

  async checkActivityTableLength (expectedLength) {
    const activityTableBodyRows = $$('#river tbody tr')
    expect(activityTableBodyRows.length).to.equal(expectedLength)
  }

  async checkActivityTableContains (riverName, daysFishedWithMandatoryRelease, daysFishedOther) {
    const activityTableBody = $('#river tbody')
    const riverNameCell = activityTableBody.$(`th=${riverName}`)
    const rowForRiver = riverNameCell.$('..')
    expect(rowForRiver.$('td:nth-child(2)').getText()).to.equal(daysFishedWithMandatoryRelease)
    expect(rowForRiver.$('td:nth-child(3)').getText()).to.equal(daysFishedOther)
  }
}

module.exports = new SummaryPage()
