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
      browserVersion: 'latest',
      'goog:chromeOptions': {
        args: ['--headless', '--disable-gpu', '--no-sandbox']
      }
    },
    {
      browserName: 'firefox',
      browserVersion: 'latest',
      'moz:firefoxOptions': {
        args: ['-headless'],
        binary: '/usr/bin/firefox'
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
  baseExternalUrl: process.env.SERVICE_URL || 'http://localhost:3000',
  baseAdminUrl: process.env.ADMIN_SERVICE_URL || 'http://localhost:4000',
  baseUrl: process.env.SERVICE_URL || 'http://localhost:3000'
}
exports.config = lodash.defaultsDeep(dockerConfig, commonConfig)
