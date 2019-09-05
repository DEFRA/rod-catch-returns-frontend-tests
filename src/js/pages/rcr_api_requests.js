const clientCredentials = require('../lib/client-credentials-grant')
const request = require('request') // bus that carries request back and forth to the test

class GetRcrActitvty {
  constructor (browser, testdata) {
    this.browser = browser
    this.testdata = testdata
  }

  //  console.log("*** emailAddress: " + emailAddress);

  // options for api response :- need to change postman token so used random 12 digit in the end

  // this is to return request as a promise - Earlier we had issues as it didn't perform the assertions after the response was received
  // this way of returning promise works reliably to return response and perform actions/assertions on the response
  async fetchRcrActivity (contactId, season) {
    return new Promise(function (resolve, reject) {
      // Do async job
      request({
        method: 'POST',
        url: process.env['DYNAMICS_ENDPOINT'] + '/api/data/v9.0/defra_GetRCRActivity',
        headers:
          {
            'cache-control': 'no-cache',
            'Content-Type': 'application/json',
            Authorization: clientCredentials.getAuthHeaderValue(),
            Accept: 'application/json'
          },
        body: {
          ContactId: contactId,
          Season: season
        },
        json: true
      }, function (err, resp, body) {
        if (err) {
          reject(err)
        } else {
          resolve(resp, body)
        }
      })
    })
  }

  //* *************USE THIS**********************/
  async requestCheckStatus () {
    // get get status from the RCR activities table in

    // Calling request to return a promise so that it will use the returning values and form the rest of the assertions/actions
    var result = await this.fetchRcrActivity('2696fe53-d55d-e811-8121-5065f38b8421', 2018)
    console.log(JSON.stringify(result, null, 2))
  }
}

module.exports = new GetRcrActitvty()
