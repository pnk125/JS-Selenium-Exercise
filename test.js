require("mocha");
let webdriver = require("selenium-webdriver");
let By = webdriver.By;
let driver;
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;

describe('JS-Selenium-Exercise', function () {
    describe('Test1', function () {

        before(async function() {
            driver = await new webdriver.Builder()
                .forBrowser('chrome')
                .build();
        });
        after(async function() {
            await driver.quit();
        });
        it('should follow the instructions', async function () {
            this.timeout(10000);

            // WRITE CODE BELOW:

            // Open google.com


            // Check that the google logo is visible


            // Check there are two options present: "Google Search" and "I'm Feeling Lucky"


            // Enter text "PayPal" and click "I'm Feeling Lucky"


            // Check the url is now "https://www.paypal.com/"


            // Click "Sitemap"


            // Check the url is now "https://www.paypal.com/us/webapps/mpp/full-sitemap"



            // Store all of the links on this page into a list and then print them all to system.out

        })
    })
});