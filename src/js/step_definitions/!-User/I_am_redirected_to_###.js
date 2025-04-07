const { defineStep } = require('@cucumber/cucumber')

defineStep(/I am redirected to (.*)/, async function (url) {
  await expect(browser).toHaveUrl(expect.stringContaining(url))
})
