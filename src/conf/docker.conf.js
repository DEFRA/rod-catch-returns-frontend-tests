'use strict'
const lodash = require('lodash')
const commonConfig = require('./common.conf').config

/*
  Configuration for running with local browsers inside the docker container built from this project's Dockerfile
 */
const dockerConfig = {
  /*
   * ============
   * Capabilities
   * ============
   * Maximum instances to run in parallel.  Can be overridden on a per-browser basis by adding maxInstances option under each capability.
   */
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--no-sandbox']
      }
    },
    {
      browserName: 'firefox',
      'moz:firefoxOptions': {
        // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
        // args: ['--headless']
      }
    }
  ],

  /*
   * ===================
   * Test Configurations
   * ===================
   * Set a base URL in order to shorten url command calls. If your url parameter starts
   * with "/", then the base url gets prepended.
   */
  baseUrl: process.env.SERVICE_URL || 'http://localhost:3000',
  services: ['selenium-standalone']
}
exports.config = lodash.defaultsDeep(dockerConfig, commonConfig)
