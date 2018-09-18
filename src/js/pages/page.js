'use strict'
const winston = require('winston')

const waitForNav = require('../lib/wait-for-navigation-on-action')

class Page {
  /**
   * The expected URL for the page.  Must be overridden by subclass implementations
   */
  get url () {
    throw new Error('Page implementation does not override method url()')
  }

  open () {
    const self = this
    winston.debug(`Opening url ${this.url}`)
    // waitForNav(function () {
    browser.url(self.url)
    // });
  }

  isOpen () {
    return browser.getUrl().includes(this.url)
  }

  checkOpen () {
    if (!this.isOpen()) {
      winston.debug(`Page.checkOpen waiting for browser URL ${browser.getUrl()} to match ${this.url}`)
      const fn = this.isOpen.bind(this)
      const url = this.url
      try {
        browser.waitUntil(fn, browser.options.waitforTimeout, `Expected URL '${browser.getUrl()}' to contain '${url}'`, 1000)
      } catch (e) {
        winston.error('Error checking if page is open ', e)
        throw e
      }
    }
    winston.debug(`Page.checkOpen - checking for ${this.url} completed successfully`)
  }

  static doContinue () {
    winston.info(`Waiting for continue button on ${browser.getUrl()} to be enabled....`)
    try {
      browser.waitUntil(function () {
        const isDisabled = browser.getAttribute('//*[@name="continue"]', 'disabled') === 'true'
        if (isDisabled) {
          winston.info(`Waiting for continue button on ${browser.getUrl()} to be enabled before continuing. (isDisabled=${isDisabled})`)
        }
        return !isDisabled
      }, browser.options.waitforTimeout, `Continue button on ${browser.getUrl()} not enabled within the allowed time.`, browser.options.waitforInterval)
    } catch (e) {
      winston.error(`Error waiting for continue button to be enabled on ${browser.getUrl()}`, e)
      throw e
    }

    waitForNav(function () {
      //browser.click('#continueBtn');
      var element = browser.element('//*[@name="continue"]')
      element.click()
    })
  }

  continue () {
    const self = this
    self.checkOpen()
    Page.doContinue()
  }
}

module.exports = Page
