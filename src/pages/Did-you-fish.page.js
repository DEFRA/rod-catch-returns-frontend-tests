'use strict'

const Page = require('./page')

const DID_FISH_ID = '#dyf-1'
const DIDNT_FISH_ID = '#dyf-2'

class DidYouFishPage extends Page {
  get url () {
    return '/did-you-fish'
  }

  submit (answer) {
    const id = answer === 'did' ? DID_FISH_ID : DIDNT_FISH_ID
    this.click(id)
    this.clickContinue()
  }
}

module.exports = new DidYouFishPage()
