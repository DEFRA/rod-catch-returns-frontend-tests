'use strict';
const Page = require('./page');

class LandingPage extends Page {
    get url () {
        return '/';
    }

    search (text) {
        const searchField = browser.element('#lst-ib');
        searchField.setValue(text);
        browser.pause(1000);

        browser.submitForm('form#tsf')
        browser.pause(1000);
    }

}

module.exports = new LandingPage();
