'use strict'
const { logger } = require('defra-logging-facade')
const waitForNav = require('../lib/wait-for-navigation-on-action')
require('@wdio/sync')
const SELECTOR_CONTINUE = '//*[@name="continue"]'

class Page {
  /**
   * The expected URL for the page.  Must be overridden by subclass implementations
   */
  get url () {
    throw new Error('Page implementation does not override method url()')
  }

  open () {
    logger.debug(`Opening url ${this.url}`)
    browser.url(this.url)
  }

  isOpen () {
    return browser.getUrl().includes(this.url)
  }

  checkOpen () {
    if (!this.isOpen()) {
      logger.debug(`Page.checkOpen - async waiting for browser URL ${browser.getUrl()} to match ${this.url}`)
      const fn = this.isOpen.bind(this)
      const url = this.url
      try {
        browser.waitUntil(fn, browser.options.waitforTimeout, `Expected URL '${browser.getUrl()}' to contain '${url}'`, 1000)
      } catch (e) {
        logger.error('Error checking if page is open ', e)
        throw e
      }
      logger.debug(`Page.checkOpen - async checking for ${this.url} completed successfully`)
    }
  }

  continue () {
    this.checkOpen()
    this.clickNavigationLink(SELECTOR_CONTINUE)
  }

  clickNavigationLink (selector) {
    waitForNav(function () {
      $(selector).click()
    })
  }

  static clickRadioButton (selector) {
    // GOV.UK Radio Buttons cannot be clicked via the input field in some browsers (IE/Safari)
    // The workaround is to use the label instead
    let sel = selector.trim()
    if (!sel.endsWith('+ label')) {
      sel += ' + label'
    }
    $(sel).click()
  }
}

module.exports = Page