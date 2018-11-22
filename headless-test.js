'use strict'
const {logger} = require('defra-logging-facade')
const {fork} = require('child_process')
const headless = require('headless')
const headlessOptions = {
  display: {
    width: 2560,
    height: 1440,
    depth: 32
  },
  args: ['-extension', 'RANDR'],
  stdio: 'inherit'
}

const testConfig = process.env.TEST_CONFIG || process.argv.slice(2) || './src/conf/docker.conf.js'

headless(headlessOptions, function (err, xvfbProc, serverNum) {
  if (err) {
    logger.error('Unable to start xvfb', err)
    return
  }
  logger.info(`Successfully started Xvfb on server number ${serverNum} with pid ${xvfbProc.pid}`)

  let testProc = null
  let killAll = function () {
    logger.info('Shutting down test processes.')
    xvfbProc.kill()

    if (testProc) {
      testProc.kill()
    }
  }

  let testProcessEnv = Object.assign({}, process.env, {'DISPLAY': `:${serverNum}`})

  try {
    testProc = fork('./node_modules/.bin/wdio', [testConfig], {
      env: testProcessEnv,
      stdio: 'inherit'
    })

    testProc.on('exit', process.exit)
    // Ensure child processes are shutdown when interrupted
    process.on('SIGINT', killAll)
  } catch (e) {
    logger.error('Error running tests', e)
    killAll()
  }
})
