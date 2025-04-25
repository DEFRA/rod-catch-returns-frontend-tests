'use strict'
const { defineStep } = require('@cucumber/cucumber')
const AgeWeightKeyPage = require('../../pages/Age-Weight-Key.page')
const path = require('path')

defineStep(/I upload the file (.*) to the age weight key/, async (file) => {
  const filePath = path.resolve(__dirname, `../../../files/${file}`)
  await AgeWeightKeyPage.uploadFile(filePath)
})
