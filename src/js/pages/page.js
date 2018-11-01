'use strict'
const { logger } = require('defra-logging-facade')

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
      logger.warn(`Page.checkOpen - async waiting for browser URL ${browser.getUrl()} to match ${this.url}`)
      const fn = this.isOpen.bind(this)
      const url = this.url
      try {
        browser.waitUntil(fn, browser.options.waitforTimeout, `Expected URL '${browser.getUrl()}' to contain '${url}'`, 1000)
      } catch (e) {
        logger.error('Error checking if page is open ', e)
        throw e
      }
      logger.info(`Page.checkOpen - async checking for ${this.url} completed successfully`)
    }
  }

  continue () {
    this.checkOpen()
    const element = browser.element('//*[@name="continue"]')
    element.click()
  }
}

module.exports = Page
