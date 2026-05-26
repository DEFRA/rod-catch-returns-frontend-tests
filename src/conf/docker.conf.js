import { commonConfig } from './common.conf.js'

export const config = {
  ...commonConfig,
  xvfb: false,
  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: 'stable',
      'goog:chromeOptions': {
        args: ['--headless=new', '--disable-gpu', '--no-sandbox']
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
}
