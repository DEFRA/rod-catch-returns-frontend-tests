'use strict'

const assert = require('assert')

const Page = require('./page')
const DeletePage = require('./Delete.page')

const ADD_RIVER_ID = '#activities-add'
const ADD_SMALL_CATCH_ID = '#small-catches-add'
const ADD_LARGE_CATCH_ID = '#catches-add'
const SAVE_ID = '#save'
const RIVER_TABLE_ID = '#river'
const SMALL_CATCH_TABLE_ID = '#small'
const LARGE_CATCH_TABLE_ID = '#large'
const LINK_SELECTOR = 'tr:first-child td:last-child a:last-child'

class SummaryPage extends Page {
  get url () {
    return '/summary'
  }

  clickAddRiver () {
    this.clickLink(ADD_RIVER_ID)
  }

  clickAddSmallCatch () {
    this.clickLink(ADD_SMALL_CATCH_ID)
  }

  clickAddLargeCatch () {
    this.clickLink(ADD_LARGE_CATCH_ID)
  }

  clickSaveAsDraft () {
    this.clickLink(SAVE_ID)
  }

  delete (table) {
    const selector = `${table} ${LINK_SELECTOR}`
    const link = $(selector)
    const deletePage = new DeletePage(link.getAttribute('href'))
    this.clickLink(selector)
    deletePage.clickContinue()
  }

  clickDeleteRiver () {
    this.delete(RIVER_TABLE_ID)
  }

  clickDeleteSmallCatch () {
    this.delete(SMALL_CATCH_TABLE_ID)
  }

  clickDeleteLargeCatch () {
    this.delete(LARGE_CATCH_TABLE_ID)
  }

  checkActivityTableLength (expectedLength) {
    const activityTableBodyRows = $$('#river tbody tr').length
    assert.strictEqual(activityTableBodyRows, expectedLength)
  }

  checkActivityTableContains (riverName, daysFishedWithMandatoryRelease, daysFishedOther) {
    const activityTableBody = $('#river tbody')
    const riverNameCell = activityTableBody.$(`td=${riverName}`)
    const rowForRiver = riverNameCell.$('..')

    assert.strictEqual(rowForRiver.$('td:nth-child(2)').getText(), daysFishedWithMandatoryRelease)
    assert.strictEqual(rowForRiver.$('td:nth-child(3)').getText(), daysFishedOther)
  }
}

module.exports = new SummaryPage()
