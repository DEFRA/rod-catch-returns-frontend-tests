'use strict'
const util = require('util')
const path = require('path')
const { logger } = require('defra-logging-facade')
const fs = require('fs-extra')
const userManager = require('../js/lib/user-manager')
const moment = require('moment')

// Selenium logging verbosity: silent | verbose | command | data | result | error
const seleniumLogLevel = process.env.SELENIUM_LOG_LEVEL || 'error'

// Ensure logs folder exists
const logDir = path.resolve(__dirname, 'logs')
fs.ensureDirSync(logDir)

/*
   Selenium standalone options.

   Allow's for the selenium server version and browser driver version to be defined when running standalone.
   Drivers should be updated as necessary when new browser releases dictate it.
 */
const seleiumDefaults = {
  version: '3.14.0',
  drivers: {
    chrome: {
      // See https://chromedriver.storage.googleapis.com/index.html'
      version: '2.43'
    },
    firefox: {
      // See https://github.com/mozilla/geckodriver/releases
      version: '0.23.0'
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

  /**
   * Project-specific configuration options
   *
   * Add any project-specific configuration options here (keep things separate from the standard wdio config)
   *
   */
  _projectConfiguration: {
    // timeout that specifies a time to wait for the implicit element location strategy when locating elements using the element or elements commands
    implicitTimeout: 0,
    // time to wait for the page loading to complete
    pageTimeout: 30000,
    // time to wait for asynchronous scripts to run
    scriptTimeout: 30000
  },

  /*
   * Default timeout in milliseconds for request
   * if Selenium Grid doesn't send response
   */
  connectionRetryTimeout: 90000,
  // Default request retries count
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
   * WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
   * it and to build services around it. You can either apply a single function or an array of
   * methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
   * resolved to continue.
   *
   * Gets executed once before all workers get launched.
   */
  onPrepare: function (config, capabilities) {
    const prettyConfig = util.inspect(config, { depth: null, colors: true })
    const prettyCapabilities = util.inspect(capabilities, { depth: null, colors: true })
    logger.info(`Running tests with configuration: \nCapabilities: ${prettyCapabilities}}\n\nConfiguration:${prettyConfig}`)
  },

  /*
   *
   * Gets executed before test execution begins. At this point you can access all global
   * variables, such as `browser`. It is the perfect place to define custom commands.
   */
  before: function before (capabilities, specs) {
    // reference to configuration object
    const cfg = this
    // reference to the current session identifier
    const testSessionId = browser.session().sessionId

    logger.info('Configuring test framework')

    // Setup the Chai assertion framework
    const chai = require('chai')

    global.expect = chai.expect
    global.assert = chai.assert
    global.should = chai.should()

    // // Set up project specific timeout configuration settings
    browser.timeouts('implicit', cfg._projectConfiguration.implicitTimeout)
    browser.timeouts('script', cfg._projectConfiguration.scriptTimeout)
    browser.timeouts('page load', cfg._projectConfiguration.pageTimeout)
  },
  /*
   *
   * Hook that gets executed before the suite starts
   * beforeSuite: function (suite) {
   * },
   *
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   * beforeHook: function () {
   * },
   *
   * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
   * afterEach in Mocha)
   * afterHook: function () {
   * },
   *
   * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * beforeTest: function (test) {
   * },
   *
   * Runs before a WebdriverIO command gets executed.
   * beforeCommand: function (commandName, args) {
   * },
   *
   * Runs after a WebdriverIO command gets executed
   * afterCommand: function (commandName, args, result, error) {
   * },
   *
   * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * afterTest: function (test) {
   * },
   *
   * Hook that gets executed after the suite has ended
   * afterSuite: function (suite) {
   * },
   *
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * after: function (result, capabilities, specs) {
   * },
   *
   * Gets executed after all workers got shut down and the process is about to exit. It is not
   * possible to defer the end of the process using a promise.
   * onComplete: function(exitCode) {
   * }
   */

  // Cucumber specific hooks
  beforeFeature: async function (feature) {
    logger.info(`Running feature: ${feature.name}`)
    await userManager.deleteAllUserSubmissions(moment().year())
  },
  beforeScenario: function (scenario) {
    logger.info(`Running scenario: ${scenario.name}`)
  },
  /*
   * beforeStep: function (step) {
   * },
   * afterStep: function (stepResult) {
   * },
   * afterScenario: function (scenario) {
   * },
   * afterFeature: function (feature) {
   * }
   */

  /*
   * Common selenium properties (only applicable when services configured with: ['selenium-standalone'],
   */
  seleniumLogs: './logs/selenium',
  seleniumArgs: seleiumDefaults,
  seleniumInstallArgs: seleiumDefaults
}
