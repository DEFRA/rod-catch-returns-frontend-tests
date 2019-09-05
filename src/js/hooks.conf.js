'use strict'

const util = require('util')
const { logger } = require('defra-logging-facade')
const { infoMsg, warningMsg } = require('defra-wdio-core')

const userManager = require('../js/lib/user-manager')

const hooks = {

  onPrepare: (config, capabilities) => {
    const prettyConfig = util.inspect(config, { depth: null, colors: true })
    const prettyCapabilities = util.inspect(capabilities, { depth: null, colors: true })
    logger.info(`Running tests with configuration: \nCapabilities: ${prettyCapabilities}}\n\nConfiguration:${prettyConfig}`)
  },

  beforeSession: (config, capabilities, specs) => { },

  before: (capabilities, specs) => {
    if (!browser.capabilities.realMobile) browser.setWindowSize(1600, 1000)

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

  beforeCommand: (commandName, args) => {
    logger.debug(`Running command ${commandName} with args ${args}`)
  },

  afterCommand: (commandName, args, result, error) => { },
  after: (result, capabilities, specs) => { },
  afterSession: (config, capabilities, specs) => { },
  beforeSuite: (suite) => { },
  beforeHook: () => { },
  beforeTest: (test) => { },
  afterTest: (test) => { },
  afterHook: () => { },
  afterSuite: (suite) => { },
  onComplete: (exitCode, config, capabilities, results) => { },
  onReload: (oldSessionId, newSessionId) => { },

  /* Cucumber specific hooks */

  beforeFeature: (uri, feature, scenarios) => {
    logger.info('**********************************************************************************')
    logger.info(`Test session id:     ${browser.sessionId}`)
    logger.info(`Running feature:     ${feature.document.feature.name}`)
  },

  beforeScenario: (uri, feature, scenario, sourceLocation) => {
    logger.info('**********************************************************************************')
    logger.info(`Running scenario:    ${scenario.name}`)
  },

  beforeStep: (uri, feature) => {
    logger.debug('**********************************************************************************')
    logger.debug('Running step:       ?{step.text}')
  },

  afterStep: (uri, feature, { error, result }) => { },
  afterScenario: (uri, feature, scenario, result, sourceLocation) => { },
  afterFeature: (uri, feature, scenarios) => { }

}

exports.config = hooks
