'use strict'
const Page = require('./page')
const { logger } = require('defra-logging-facade')
const { validateTableByCaption, getSmallCatchRow } = require('../utils/table-utils')

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

  async clickChangeSmallCatch (month, riverName) {
    const row = await getSmallCatchRow(month, riverName)
    const changeLink = await row.$('a[href*="/clear"]')
    await changeLink.click()
  }

  async clickDeleteSmallCatch (month, riverName) {
    const row = await getSmallCatchRow(month, riverName)
    const deleteLink = await row.$('a[href*="/delete/small-catches"]')
    await deleteLink.click()
  }

  async clickExcludeCheckboxSmallCatch (month, riverName) {
    const row = await getSmallCatchRow(month, riverName)
    const changeLink = await row.$('input[name="exclude-small-catch"]')
    await changeLink.click()
  }

  async getLargeCatchRow (riverName, type) {
    const table = await $('caption*=Salmon and large adult sea trout').parentElement()
    const rows = await table.$$('tbody tr')

    for (const row of rows) {
      const riverCell = await row.$('th[data-label="River"]')
      const typeCell = await row.$('td[data-label="Type"]')

      const [riverText, typeText] = await Promise.all([
        riverCell?.getText() ?? '',
        typeCell?.getText() ?? ''
      ])

      if (riverText.trim() === riverName && typeText.trim() === type) {
        return row
      }
    }

    throw new Error(`Could not find row for ${riverName} and ${type}`)
  }

  async clickAddLargeCatch () {
    logger.debug('About to click Add a salmon or large sea trout link')
    await this.clickNavigationLink('#catches-add')
  }

  async clickChangeLargeCatch (riverName, type) {
    const row = await this.getLargeCatchRow(riverName, type)
    const changeLink = await row.$('a[href*="/clear"]')
    await changeLink.click()
  }

  async clickDeleteLargeCatch (riverName, type) {
    const row = await this.getLargeCatchRow(riverName, type)
    const changeLink = await row.$('a[href*="/delete/catches"]')
    await changeLink.click()
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

  async validateLargeCatchTable (dataTable) {
    await validateTableByCaption('Salmon and large adult sea trout', dataTable)
  }
}

module.exports = new SummaryPage()
