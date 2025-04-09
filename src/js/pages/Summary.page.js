'use strict'
const Page = require('./page')
const { logger } = require('defra-logging-facade')
const DeletePage = require('./Delete.page')

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

  async clickAddSmallCatch () {
    logger.debug('Add a small catch of under 1 lb link')
    await this.clickNavigationLink('#small-catches-add')
  }

  async clickAddLargeCatch () {
    logger.debug('About to click Add a salmon or large sea trout link')
    await this.clickNavigationLink('#catches-add')
  }

  async clickDeleteSmallCatch () {
    logger.debug('Delete small catch')
    const clickDeleteSmallCatch = await browser.element('table#small tr:first-child td:nth-child(7) span a:nth-child(2)')
    const deleteSmallPage = new DeletePage(await clickDeleteSmallCatch.getAttribute('href'))
    await clickDeleteSmallCatch.click()
    await deleteSmallPage.continue()
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

  async validateTableByCaption (captionText, dataTable) {
    // Find the table by its caption
    const table = await $(`caption*=${captionText}`).parentElement()

    // Assert the row count
    const expectedRowCount = dataTable.raw().length - 1
    const rows = await table.$$('tbody tr')
    expect(rows.length).toEqual(expectedRowCount)

    // Assert the data in the table
    const expectedRows = dataTable.raw().slice(1) // Skip the first row (headers), we just want to validate the content
    const tbodyText = await table.$('tbody').getText() // Convert the whole table to text
    for (const row of expectedRows) {
      const rowText = row.filter(cell => cell !== '<any>').join(' ')
      expect(tbodyText).toContain(rowText) // Assert text in table contains the specified row, because the order of the table can be random
    }
  }
}

module.exports = new SummaryPage()
