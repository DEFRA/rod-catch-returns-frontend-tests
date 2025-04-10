'use strict'
const Page = require('./page')
const { logger } = require('defra-logging-facade')
const DeletePage = require('./Delete.page')
const { validateTableByCaption } = require('../utils/table-utils')

class SummaryPage extends Page {
  get url () {
    return '/summary'
  }

  async clickAddRiver () {
    logger.debug('About to click Add River Link')
    await this.clickNavigationLink('#activities-add')
  }

  async getRiverRow (riverName) {
    const table = await $('caption*=Rivers fished').parentElement()
    const rows = await table.$$('tbody tr')

    for (const row of rows) {
      const riverCell = await row.$('th')
      const riverText = await riverCell.getText()

      if (riverText.trim() === riverName) {
        return row
      }
    }

    throw new Error(`Could not find river row with name: ${riverName}`)
  }

  async clickChangeRiver (riverName) {
    const row = await this.getRiverRow(riverName)
    const changeLink = await row.$('a[href*="clear"]')
    await changeLink.click()
  }

  async clickDeleteRiver (riverName) {
    const row = await this.getRiverRow(riverName)
    const deleteLink = await row.$('a[href*="/delete/activities"]')
    await deleteLink.click()
  }

  async getSmallCatchRow (month, riverName) {
    const table = await $('caption*=Small adult sea trout').parentElement()
    const rows = await table.$$('tbody tr')

    for (const row of rows) {
      const monthCell = await row.$('th[data-label="Month"]')
      const riverCell = await row.$('th[data-label="River"]')

      const [monthText, riverText] = await Promise.all([
        monthCell?.getText() ?? '',
        riverCell?.getText() ?? ''
      ])

      if (monthText.trim() === month && riverText.trim() === riverName) {
        return row
      }
    }

    throw new Error(`Could not find row for ${month} on ${riverName}`)
  }

  async clickAddSmallCatch () {
    logger.debug('Add a small catch of under 1 lb link')
    await this.clickNavigationLink('#small-catches-add')
  }

  async clickChangeSmallCatch (month, riverName) {
    const row = await this.getSmallCatchRow(month, riverName)
    const changeLink = await row.$('a[href*="/clear"]')
    await changeLink.click()
  }

  async clickDeleteSmallCatch (month, riverName) {
    const row = await this.getSmallCatchRow(month, riverName)
    const deleteLink = await row.$('a[href*="/delete/small-catches"]')
    await deleteLink.click()
  }

  async clickAddLargeCatch () {
    logger.debug('About to click Add a salmon or large sea trout link')
    await this.clickNavigationLink('#catches-add')
  }

  async clickDeleteLargeCatch () {
    logger.debug('About to click Add a salmon or large sea trout link')
    const clickDeleteLargeCatch = await browser.element('table#large tr:first-child td:nth-child(7) span a:nth-child(2)')
    const deleteLargePage = new DeletePage(await clickDeleteLargeCatch.getAttribute('href'))
    await clickDeleteLargeCatch.click()
    await deleteLargePage.continue()
  }

  async clickSaveAsDraft () {
    logger.debug('About to click Save as draft')
    await this.clickNavigationLink('#save')
  }

  async checkActivityTableLength (expectedLength) {
    const table = await $('caption*=Rivers fished').parentElement()
    const rows = await table.$$('tbody tr')
    expect(rows.length).toEqual(expectedLength)
  }

  async checkActivityTableContains (riverName, daysFishedWithMandatoryRelease, daysFishedOther) {
    const activityTableBody = await $('#river tbody')
    const riverNameCell = await activityTableBody.$(`th=${riverName}`)
    const rowForRiver = await riverNameCell.$('..')
    expect(await (await rowForRiver.$('td:nth-child(2)')).getText()).toEqual(daysFishedWithMandatoryRelease)
    expect(await (await rowForRiver.$('td:nth-child(3)')).getText()).toEqual(daysFishedOther)
  }

  async validateSmallCatchTable (dataTable) {
    await validateTableByCaption('Small adult sea trout (1lb and under)', dataTable)
  }
}

module.exports = new SummaryPage()
