'use strict';
const {defineStep} = require('cucumber');
const Landing = require('../../pages/Landing.page');

defineStep('I am on the landing page', function () {
    Landing.open();
    Landing.checkOpen();
});
