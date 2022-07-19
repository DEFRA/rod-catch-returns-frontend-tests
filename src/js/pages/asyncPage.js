'use strict'
const { logger } = require('defra-logging-facade')
const waitForNav = require('../lib/wait-for-navigation-on-action')
const SELECTOR_CONTINUE = '//*[@name="continue"]'

class Page {
  _opened = false;
  _openPagePromise;

  /**
   * The expected URL for the page.  Must be overridden by subclass implementations
   */
  get url () {
    throw new Error('Page implementation does not override method url()')
  }

  async open () {
    this._openPagePromise = browser.url(this.url)
    await this._openPagePromise
    this._opened = true
  }

  isOpen () {
    return this._opened
  }

  async continue () {
    await this._openPagePromise
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
