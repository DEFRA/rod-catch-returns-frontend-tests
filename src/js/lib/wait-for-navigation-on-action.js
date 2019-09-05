'use strict'
const { logger } = require('defra-logging-facade')
const util = require('util')
util.inspect.defaultOptions = { depth: null, colors: true }

module.exports = function (action) {
  // Page Id element is embedded on each page by the frontend layout.html
  const oldPageId = $('#pgid').isExisting() ? $('#pgid').getHTML() : 'NO_OLD_PAGE_ID_FOUND'
  const oldPageUrl = browser.getUrl()
  let currentPageId = null

  logger.debug(`Waiting for navigation, old page id=${oldPageId}`)
  try {
    action()
    browser.waitUntil(function () {
      try {
        currentPageId = $('#pgid').getHTML()
      } catch (e) {
        currentPageId = null
      }

      const hasChanged = (currentPageId !== null && currentPageId !== oldPageId)
      if (!hasChanged) {
        logger.debug(`Waiting for page to load (loaded: ${hasChanged}).  [Old page id: ${util.inspect(oldPageId)}, current page id: ${util.inspect(currentPageId)}]`)
      }
      return hasChanged
    }, browser.options.waitforTimeout, 'expected page id to change as result of action', browser.options.waitforInterval)
  } catch (e) {
    logger.error(`Expected page id (${oldPageId}) to change within ${browser.options.waitforTimeout}ms of navigation.  Current page id is ${currentPageId}`, e)
    throw e
  }
  logger.debug(`Page load complete.  [Old page: id=${util.inspect(oldPageId)}, url=${oldPageUrl}.  Current page: id=${util.inspect(currentPageId)}, url=${browser.getUrl()}]`)
}
