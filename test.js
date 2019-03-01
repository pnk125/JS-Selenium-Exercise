require("mocha")
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');

test.describe('Basic Test Suite', function () {
    test.before(function() {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();
    });
    test.after(function() {
        driver.quit();
    });
    test.it('Basic Test Case', function() {
        // write code here:

    });
});