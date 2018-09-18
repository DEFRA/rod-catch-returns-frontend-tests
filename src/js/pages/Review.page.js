'use strict'
const Page = require('./page')
const winston = require('winston')
const waitForNav = require('../lib/wait-for-navigation-on-action')

class Review

.
ReviewPage
extends
Page
{
  get
  url()
  {
    return '/review'
  }

  clickAddRIver()
  {
    console.log('About to click Add River Link')
    const addRiverLink = browser.element(`#activities-add`)
    waitForNav(function () {
      addRiverLink.click()
    })

  }

  module.exports = new ReviewPage()
