'use strict';
const {defineStep} = require('cucumber');
const LandingPage = require('../../pages/Landing.page');
defineStep(/I enter "([^"]*)" into the search field/, function (searchText) {
    LandingPage.search(searchText);
});
