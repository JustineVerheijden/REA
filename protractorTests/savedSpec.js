"use strict"
let MainPage = require ('./selectProperties.js');

describe("Saved Property Display", function() {
    let mainPage = new MainPage();
    
    beforeEach(function(){
        browser.get(mainPage.mainURL);
    });

    it("should display expected logo on first saved property", function() {
        browser.waitForAngular();
        expect(mainPage.savedProperties.get(0).element(by.css(".agencyLogo")).getAttribute('src')).toMatch(mainPage.savedFirstImage);
    });

    it("should display expected background color on first saved property", function() {
        browser.waitForAngular();
        expect(mainPage.savedProperties.get(0).element(by.css(".propertyTop")).getCssValue('background-color')).toEqual(mainPage.savedFirstBackground);
    });

    it("should display expected property image on first saved property", function() {
        browser.waitForAngular();
        expect(mainPage.savedProperties.get(0).element(by.css(".propertyInner img")).getAttribute('src')).toMatch(mainPage.savedFirstMainImage);
    });

    it("should display expected price on first saved property", function() {
        browser.waitForAngular();
        expect(mainPage.savedProperties.get(0).element(by.css(".propertyBottom")).getText()).toEqual(mainPage.savedFirstPrice);
    });
});