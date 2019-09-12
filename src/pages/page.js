'use strict'

const { Core } = require('defra-wdio-core')
const { logger } = require('defra-logging-facade')

const CONTINUE_SELECTOR = '*[name="continue"]'
const ADD_ANOTHER_SELECTOR = '*[name="add"]'
const CANCEL_ID = '#return-summary'

class Page extends Core {
  /*
   * The expected URL for the page. Must be overridden by subclass implementations
   */
  get url () {
    throw new Error('Page implementation does not override method url()')
  }

  open () {
    this.visit(this.url)

    logger.debug(`Opening url ${this.url}`)
  }

  checkUrl () {
    this._checkUrl(this.url)
  }

  clickAddAnother () {
    this.clickButton(ADD_ANOTHER_SELECTOR, false)
  }

  clickContinue (expectUrlChange) {
    this.clickButton(CONTINUE_SELECTOR, expectUrlChange)
  }

  checkErrorsOnPage (errorId, errorMessage) {
    this.hasElement(`a[href="${errorId}"]`, errorMessage)
  }

  clickCancel () {
    logger.debug('About to click cancel link')

    this.clickLink(CANCEL_ID)
  }
}

module.exports = Page
