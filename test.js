require("mocha");
const webdriver = require("selenium-webdriver");
const {By, until}= require('selenium-webdriver');
const { expect } = require('chai');

const chai = require("chai");
const assert = chai.assert;

describe('JS-Selenium-Exercise', function () {
    describe('Test1', function () {
        it('should follow the instructions', async function () {
            this.timeout(20000);
            const driver = new webdriver.Builder()
                .forBrowser('firefox')
                .build();

            // Open google.com
            await driver.get("http://www.google.com");

            // Example assertion:
            let title = await driver.getTitle();
            assert.equal(title, "Google");

            // Check that the google logo is visible
            await driver.wait(until.elementLocated(By.id('hplogo')));
            const googleLogo = await driver.findElement(By.id('hplogo'));
            expect((await googleLogo.isDisplayed()).valueOf()).equal(true);

            
            // Check there are two options present: "Google Search" and "I'm Feeling Lucky"
            const googleSearchBtn = await driver.findElement(By.xpath("//input[@id='gbqfbb']//preceding::input[1]")); //2 elements with same properties
            const imFeelingLuckyBtn = await driver.findElement(By.id('gbqfbb'));
            expect((await googleSearchBtn.getAttribute('value'))).equal("Google Search");
            expect((await imFeelingLuckyBtn.getAttribute('value'))).equal("I'm Feeling Lucky");
            
            // Enter text "PayPal" and click "I'm Feeling Lucky"
            driver.findElement(By.xpath("//input[@name='q']")).sendKeys("PayPal");
            (await driver.findElement(By.id('gbqfbb'))).click();

            // Check the url is now "https://www.paypal.com/"
            const currentURL2 = await driver.getCurrentUrl();
            assert.include(currentURL2, "https://www.paypal.com/");

            // Click "Sitemap"
            (await driver.findElement(By.xpath("//a[text()='Sitemap']"))).click();

            // Check the url is now "https://www.paypal.com/us/webapps/mpp/full-sitemap"
            let currentURL = await driver.getCurrentUrl();
            assert.equal(currentURL, "https://www.paypal.com/us/webapps/mpp/full-sitemap");

            // Store all of the links on this page into a list and then print them all to system.out
           
            driver.findElements(By.tagName("a")).then(function(elements){
                elements.forEach(function (element) {
                    element.getAttribute('href').then(function(text){
                        console.log(text);
                    });
                });
            });
            
            await driver.quit();
        })
    })
});
