'use strict'
require('dotenv').config({ debug: process.env.DEBUG })
const util = require('util')
const path = require('path')
const { logger } = require('defra-logging-facade')
const fs = require('fs-extra')
const userManager = require('../js/lib/user-manager')

// Selenium logging verbosity: silent | verbose | command | data | result | error
const seleniumLogLevel = process.env.SELENIUM_LOG_LEVEL || 'error'

// Ensure logs folder exists
const logDir = path.resolve(__dirname, 'logs')
fs.ensureDirSync(logDir)

/*
   Selenium standalone options.

   Allows for the selenium server version and browser driver version to be defined when running standalone.
   Drivers should be updated as necessary when new browser releases dictate it.
 */
const seleiumDefaults = {
  version: '3.141.59',
  drivers: {
    chrome: {
      // See https://chromedriver.storage.googleapis.com/index.html'
      version: '78.0.3904.70'
    },
    firefox: {
      // See https://github.com/mozilla/geckodriver/releases
      version: '0.24.0'
    }
  }
}

exports.config = {
  /*
   * ==================
   * Specify Test Files
   * ==================
   */
  specs: [
    './src/features/**/*.feature'
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
  // Selenium logging verbosity: silent | verbose | command | data | result | error
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
  reporters: ['spec', 'junit'],
  reporterOptions: {
    junit: {
      outputDir: './logs/junit'
    }
  },

  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    require: ['./src/js/step_definitions/**/*.js'], // <string[]> (file/dir) require files before executing features
    backtrace: true, // <boolean> show full backtrace for errors
    compiler: [], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    dryRun: false, // <boolean> invoke formatters without executing steps
    failFast: true, // <boolean> abort the run on first failure
    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true, // <boolean> disable colors in formatter output
    snippets: false, // <boolean> hide step definition snippets for pending steps
    source: true, // <boolean> hide source uris
    profile: [], // <string[]> (name) specify the profile to use
    strict: true, // <boolean> fail if there are any undefined or pending steps
    tags: [], // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: 'not @Pending',
    timeout: 150000, // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    failAmbiguousDefinitions: true
  },

  /*
   * =====
   * Hooks
   * =====
   * See http://webdriver.io/guide/testrunner/configurationfile.html for reference
   */
  // Gets executed once before all workers get launched.
  onPrepare: function (config, capabilities) {
    const prettyConfig = util.inspect(config, { depth: null, colors: true })
    const prettyCapabilities = util.inspect(capabilities, { depth: null, colors: true })
    logger.info(`Running tests with configuration: \nCapabilities: ${prettyCapabilities}}\n\nConfiguration:${prettyConfig}`)
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
    return new Promise(async (resolve) => {
      await userManager.initialise()
      await userManager.deleteAllUserSubmissions()
      resolve()
    })
  },

  // Cucumber specific hooks
  beforeFeature: function (feature) {
    logger.info('**********************************************************************************')
    logger.info(`Test session id:     ${browser}`)
    logger.info(`Running feature:     ${feature.name}`)
  },

  beforeScenario: function (scenario) {
    logger.info('**********************************************************************************')
    logger.info(`Running scenario:    ${scenario.name}`)
  },

  beforeStep: function (step) {
    logger.debug('**********************************************************************************')
    logger.debug(`Running step:       ${step.text}`)
  },

  // Runs before a WebdriverIO command gets executed
  beforeCommand: function (commandName, args) {
    logger.debug(`Running command ${commandName} with args ${args}`)
  },
  seleniumLogs: './logs/selenium',
  seleniumArgs: seleiumDefaults,
  seleniumInstallArgs: seleiumDefaults
}
