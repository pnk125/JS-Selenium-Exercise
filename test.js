require("mocha");
const webdriver = require("selenium-webdriver");
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
            const googleLogo = await driver.findElement(By.xpath("//img[@id='hplogo']"));
            expect(googleLogo.isDisplayed()).toEqual(true);
            // driver.findElement(webdriver.By.xpath("//img[@id='hplogo']"))


            // Check there are two options present: "Google Search" and "I'm Feeling Lucky"
            const googleSearchBtn = await driver.findElement(By.xpath("//input[@name='btnK']"));
            const imFeelingLuckyBtn = await driver.findElement(By.xpath("//span[contains(text(),'Feeling Trendy')]"));
            expect(googleSearchBtn.isDisplayed()).toEqual(true);
            expect(imFeelingLuckyBtn.isDisplayed()).toEqual(true);
            
            // Enter text "PayPal" and click "I'm Feeling Lucky"
            driver.findElement(By.xpath("//input[@name='q']")).sendKeys("PayPal");
            (await driver.findElement(By.xpath("//span[contains(text(),'Feeling Trendy')]"))).click();

            // Check the url is now "https://www.paypal.com/"
            let currentURL = await driver.getCurrentUrl();
            assert.equal(currentURL, "https://www.paypal.com/");

            // Click "Sitemap"
            (await driver.findElement(By.xpath("//a[text()='Sitemap']"))).click();

            // Check the url is now "https://www.paypal.com/us/webapps/mpp/full-sitemap"
            let currentURL = await driver.getCurrentUrl();
            assert.equal(currentURL, "https://www.paypal.com/us/webapps/mpp/full-sitemap");

            // Store all of the links on this page into a list and then print them all to system.out
           
            driver.findElements(By.tagName("a")).then(function(elements){
                elements.forEach(function (element) {
                    element.getText().then(function(text){
                        console.log(text);
                    });
                });
            });
            
            await driver.quit();
        })
    })
});
