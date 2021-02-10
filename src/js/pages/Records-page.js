'use strict'
const Page = require('./page')

class RecordsPage extends Page {
  get url () {
    return '/records'
  }

clickRecords() {
  const link = $('=Records')
  link.click()
}
 }

module.exports = new RecordsPage()
