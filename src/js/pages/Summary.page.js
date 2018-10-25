'use strict'
const Page = require('./page')
const winston = require('winston')
const waitForNav = require('../lib/wait-for-navigation-on-action')
const DeletePage = require('./Delete.page')

class SummaryPage extends Page {
  get url () {
    return '/summary'
  }

  clickAddRIver () {
    console.log('About to click Add River Link')
    const addRiverLink = browser.element(`#activities-add`)
    waitForNav(function () {
      addRiverLink.click()
    })

  }

  clickAddSmallCatch () {
    console.log('Add a small catch of under 1 lb link')
    const addSmallCatchLink = browser.element(`#small-catches-add`)
    waitForNav(function () {
      addSmallCatchLink.click()
    })
  }

  clickAddLargeCatch () {
    console.log('About to click Add a salmon or large sea trout link')
    const clickLargeCatchLink = browser.element(`#catches-add`)
    waitForNav(function () {
      clickLargeCatchLink.click()
    })
  }

  clickDeleteRiver () {
    console.log('About to click Delete River Link')
    const clickDeleteRiverLink = browser.element('table#river tr:first-child td:nth-child(5) span a:nth-child(2)')
    let deleteRiverPage = new DeletePage(clickDeleteRiverLink.getAttribute('href'));
    waitForNav(function () {
      clickDeleteRiverLink.click();
    })

    deleteRiverPage.continue();
  }

  clickDeleteSmallCatch () {
    console.log('Delete small catch')
    const clickDeleteSmallCatch = browser.element('table#small tr:first-child td:nth-child(7) span a:nth-child(2)')
    let deleteSmallPage = new DeletePage(clickDeleteSmallCatch.getAttribute('href'));
    waitForNav(function () {
      clickDeleteSmallCatch.click()
    })

    deleteSmallPage.continue();
  }

  clickDeleteLargeCatch () {
    console.log('About to click Add a salmon or large sea trout link')
    const clickDeleteLargeCatch = browser.element('table#large tr:first-child td:nth-child(7) span a:nth-child(2)')
    let deleteLargePage = new DeletePage(clickDeleteRiverLink.getAttribute('href'));
    waitForNav(function () {
      clickDeleteLargeCatch.click()
    })

    deleteLargePage.continue();
  }

  clickSaveAsDraft () {
    console.log('About to click Save as draft')
    const clickSaveAsDraftLink = browser.element(`#save`)
    waitForNav(function () {
      clickSaveAsDraftLink.click()
    })
  }
}

module.exports = new SummaryPage()
