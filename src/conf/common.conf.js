'use strict'
require('dotenv').config({ debug: process.env.DEBUG })
const path = require('path')
const fs = require('fs-extra')
const userManager = require('../js/lib/user-manager')

// Level of logging verbosity: trace | debug | info | warn | error | silent
const seleniumLogLevel = process.env.SELENIUM_LOG_LEVEL || 'error'

// Ensure logs folder exists
const logDir = path.resolve(__dirname, 'logs')
fs.ensureDirSync(logDir)

exports.config = {
  runner: 'local',
  /*
   * ==================
   * Specify Test Files
   * ==================
   */
  specs: [
    '../features/*.feature'
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],
  // execArgv: ['--inspect'],

  /*
   *
   * ===================
   * Test Configurations
   * ===================
   * By default WebdriverIO commands are executed in a synchronous way using the wdio-sync package.
   */
  sync: true,
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: seleniumLogLevel,
  // Wdio debugging (use node inspector)
  debug: true,
  // Enables colors for log output.
  coloredLogs: true,
  // Saves a screenshot to a given path if a command fails.
  screenshotPath: './logs/errorShots/',
  // Take screenshots if the selenium driver crashes
  screenshotOnReject: true,
  // Default timeout for all waitFor* commands.
  waitforTimeout: 120000,
  // Default interval for all waitFor* commands (number of ms between checks to see if the runner should stop waiting)
  waitforInterval: 500,

  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  // Framework to run specs with.
  framework: 'cucumber',
  // Test reporter for stdout.
  reporters: [
    'spec',
    [
      'junit',
      {
        outputDir: './logs/junit',
        errorOptions: {
          error: 'message',
          failure: 'message',
          stacktrace: 'stack'
        },
        outputFileFormat: function (options) {
          return `wdio.${options.capabilities.browserName.toLowerCase()}-${options.cid}.xml`
        }
      }
    ]
  ],

  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    require: ['./src/js/step_definitions/**/*.js'], // <string[]> (file/dir) require files before executing features
    backtrace: true, // <boolean> show full backtrace for errors
    compiler: [], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    dryRun: false, // <boolean> invoke formatters without executing steps
    failFast: true, // <boolean> abort the run on first failure
    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true, // <boolean> disable colors in formatter output
    snippets: true, // <boolean> hide step definition snippets for pending steps
    source: true, // <boolean> hide source uris
    profile: [], // <string[]> (name) specify the profile to use
    strict: true, // <boolean> fail if there are any undefined or pending steps
    tags: 'not @Pending',
    timeout: 150000, // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    failAmbiguousDefinitions: true
  },

  /*
   * Gets executed before test execution begins. At this point you can access all global
   * variables, such as `browser`. It is the perfect place to define custom commands.
   */
  before: function before (capabilities, specs) {
    browser.addCommand('getUser', async (number) => {
      return userManager.getUser(number)
    })
    browser.addCommand('getAdmin', async (number) => {
      return userManager.getAdmin(number)
    })
    // Reset submission for all RCR users identified in the test configuration before each feature runs
    return new Promise((resolve) => {
      return userManager.initialise()
        .then(() => {
          return userManager.deleteAllUserSubmissions()
        })
        .then(() => {
          return userManager.deleteAllGrilseProbablities()
        })
        .then(() => {
          resolve()
        })
    })
  }
}
