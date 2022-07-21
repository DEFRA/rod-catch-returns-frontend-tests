const Page = require('./asyncPage.js')

class AddActivitiesPage extends Page {
  get url () {
    return '/activities/add'
  }

  async selectRiver (riverName) {
    const river = await $('#river')
    // console.log('clearing river entry field')
    // await river.clearValue()
    console.log(`adding ${riverName} as value`)
    await river.addValue(riverName)
    console.log('set river entry to ', await river.getValue())
    // await river.setValue(riverName)
    console.log(`set #river value to ${riverName}`)
  }

  async setDaysFishedWithMandatoryRelease (days) {
    console.log(`setting #daysFishedWithMandatoryRelease value to ${days}`)
    const dfwmr = await $('#daysFishedWithMandatoryRelease')
    await dfwmr.setValue(days)
    console.log(`set #daysFishedWithMandatoryRelease value to ${days}`)
  }

  async setDaysFishedOther (days) {
    console.log(`setting #daysFishedOther value to ${days}`)
    const dfo = await $('#daysFishedOther')
    await dfo.setValue(days)
    console.log(`set #daysFishedOther value to ${days}`)
  }
}

module.exports = new AddActivitiesPage()

// river input Element 
// {
//   sessionId: '6087761426e66c12e29e80b6ee530128',
//   elementId: 'c91b9808-aee9-4174-8879-a89b7ea05155',
//   'element-6066-11e4-a52e-4f735466cecf': 'c91b9808-aee9-4174-8879-a89b7ea05155',
//   selector: '#river',
//   parent: Browser {
//     sessionId: '6087761426e66c12e29e80b6ee530128',
//     capabilities: {
//       acceptInsecureCerts: false,
//       browserName: 'chrome',
//       browserVersion: '103.0.5060.114',
//       chrome: {
//         chromedriverVersion: '103.0.5060.134 (8ec6fce403b3feb0869b0732eda8bd95011d333c-refs/branch-heads/5060@{#1262})',
//         userDataDir: '/tmp/.com.google.Chrome.4yKykS'
//       },
//       'goog:chromeOptions': { debuggerAddress: 'localhost:39537' },
//       networkConnectionEnabled: false,
//       pageLoadStrategy: 'normal',
//       platformName: 'linux',
//       proxy: {},
//       'se:cdp': 'ws://172.17.0.2:4444/session/6087761426e66c12e29e80b6ee530128/se/cdp',
//       'se:cdpVersion': '103.0.5060.114',
//       setWindowRect: true,
//       strictFileInteractability: false,
//       timeouts: { implicit: 0, pageLoad: 300000, script: 30000 },
//       unhandledPromptBehavior: 'dismiss and notify',
//       'webauthn:extension:credBlob': true,
//       'webauthn:extension:largeBlob': true,
//       'webauthn:virtualAuthenticators': true
//     },
//     addCommand: [Function (anonymous)],
//     overwriteCommand: [Function (anonymous)],
//     addLocatorStrategy: [Function (anonymous)],
//     config: {
//       specs: [ './src/features/**/*.feature' ],
//       suites: {},
//       exclude: [],
//       outputDir: undefined,
//       logLevel: 'info',
//       logLevels: {},
//       excludeDriverLogs: [],
//       bail: 0,
//       waitforInterval: 500,
//       waitforTimeout: 120000,
//       framework: 'cucumber',
//       reporters: [
//         'spec',
//         [
//           'junit',
//           {
//             outputDir: './logs/junit',
//             errorOptions: {
//               error: 'message',
//               failure: 'message',
//               stacktrace: 'stack'
//             },
//             outputFileFormat: [Function: outputFileFormat]
//           }
//         ]
//       ],
//       services: [
//         [
//           'selenium-standalone',
//           {
//             logPath: './logs/selenium',
//             installArgs: { drivers: { chrome: true, firefox: '0.31.0' } },
//             args: { drivers: { chrome: true, firefox: '0.31.0' } }
//           }
//         ]
//       ],
//       maxInstances: 1,
//       maxInstancesPerCapability: 100,
//       filesToWatch: [],
//       connectionRetryTimeout: 90000,
//       connectionRetryCount: 3,
//       execArgv: [],
//       runnerEnv: {},
//       runner: 'local',
//       specFileRetries: 0,
//       specFileRetriesDelay: 0,
//       specFileRetriesDeferred: false,
//       reporterSyncInterval: 100,
//       reporterSyncTimeout: 5000,
//       cucumberFeaturesWithLineNumbers: [],
//       autoCompileOpts: {
//         autoCompile: true,
//         tsNodeOpts: { transpileOnly: true },
//         babelOpts: {}
//       },
//       mochaOpts: { timeout: 10000 },
//       jasmineOpts: { defaultTimeoutInterval: 10000 },
//       cucumberOpts: {
//         timeout: 150000,
//         require: [ './src/js/step_definitions/**/*.js' ],
//         backtrace: true,
//         compiler: [],
//         dryRun: false,
//         failFast: true,
//         format: [ 'pretty' ],
//         colors: true,
//         snippets: true,
//         source: true,
//         profile: [],
//         strict: true,
//         tags: [],
//         tagExpression: 'not @Pending',
//         ignoreUndefinedDefinitions: false,
//         failAmbiguousDefinitions: true
//       },
//       onPrepare: [],
//       onWorkerStart: [],
//       onWorkerEnd: [],
//       before: [ [Function: bound before] ],
//       beforeSession: [],
//       beforeSuite: [],
//       beforeHook: [],
//       beforeTest: [],
//       beforeCommand: [],
//       afterCommand: [],
//       afterTest: [],
//       afterHook: [],
//       afterSuite: [],
//       afterSession: [],
//       after: [],
//       onComplete: [],
//       onReload: [],
//       beforeFeature: [],
//       beforeScenario: [],
//       beforeStep: [],
//       afterStep: [],
//       afterScenario: [],
//       afterFeature: [],
//       baseExternalUrl: 'https://rcr-dev.aws.defra.cloud',
//       baseAdminUrl: 'https://rcr-dev-admin.aws.defra.cloud',
//       baseUrl: 'https://rcr-dev.aws.defra.cloud',
//       sync: true,
//       debug: true,
//       coloredLogs: true,
//       screenshotPath: './logs/errorShots/',
//       screenshotOnReject: true,
//       _: [ 'src/conf/docker.conf.js' ],
//       '$0': 'node_modules/.bin/wdio',
//       ignoredWorkerServices: []
//     },
//     rcrSubmissionSeason: 2022,
//     _NOT_FIBER: false
//   },
//   emit: [Function: bound ],
//   isReactElement: false,
//   addCommand: [Function (anonymous)],
//   overwriteCommand: [Function (anonymous)]
// }