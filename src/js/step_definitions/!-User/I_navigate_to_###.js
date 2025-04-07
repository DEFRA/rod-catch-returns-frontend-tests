const { defineStep } = require('@cucumber/cucumber')

defineStep(/I navigate to (.*)/, async function (url) {
  await browser.url(url)
})
