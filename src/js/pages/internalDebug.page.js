'use strict'
const Page = require('./page')

class InternalDebugPage extends Page {
  get url () {
    return 'http://internal-devrcrbesalb001-668171600.eu-west-1.elb.amazonaws.com:9580/api/submissions/search/getByContactIdAndSeason?season=2024'
  }
}

module.exports = new InternalDebugPage()
