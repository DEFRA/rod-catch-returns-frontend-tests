'use strict'
const { logger } = require('defra-logging-facade')
const waitForNav = require('../lib/wait-for-navigation-on-action')
const SELECTOR_CONTINUE = '//*[@name="continue"]'

class Page {
  /**
   * The expected URL for the page.  Must be overridden by subclass implementations
   */
  get url () {
    throw new Error('Page implementation does not override method url()')
  }

  async open () {
    logger.debug(`Opening url ${this.url}`)
    await browser.url(this.url)
  }

  isOpen () {
    return browser.getUrl().includes(this.url)
  }

  async checkOpen () {
    if (!(await this.isOpen())) {
      logger.debug(`Page.checkOpen - async waiting for browser URL ${browser.getUrl()} to match ${this.url}`)
      const fn = this.isOpen.bind(this)
      const url = this.url
      try {
        await browser.waitUntil(fn, browser.options.waitforTimeout, `Expected URL '${browser.getUrl()}' to contain '${url}'`, 1000)
      } catch (e) {
        logger.error('Error checking if page is open ', e)
        throw e
      }
      logger.debug(`Page.checkOpen - async checking for ${this.url} completed successfully`)
    }
  }

  async continue () {
    await this.checkOpen()
    await this.clickNavigationLink(SELECTOR_CONTINUE)
  }

  async clickNavigationLink (selector) {
    const navLink = await $(selector)
    await navLink.click()
    // waitForNav(function () {
    //   $(selector).click()
    // })
  }

  static async clickRadioButton (selector) {
    // GOV.UK Radio Buttons cannot be clicked via the input field in some browsers (IE/Safari)
    // The workaround is to use the label instead
    let sel = selector.trim()
    if (!sel.endsWith('+ label')) {
      sel += ' + label'
    }
    // $(sel).click()
    const radioButton = await $(sel)
    await radioButton.click()
  }
}

module.exports = Page
