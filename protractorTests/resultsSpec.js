"use strict"
let MainPage = require ('./selectProperties.js');

describe("Results Properties - First Property Display", function() {
    let mainPage = new MainPage();
    
    beforeEach(function(){
        browser.get(mainPage.mainURL);
    });

    it("should display expected logo on first property", function() {
        browser.waitForAngular();
        expect(mainPage.resultsProperties.get(0).element(by.css(".agencyLogo")).getAttribute('src')).toMatch(mainPage.firstImage);
    });

    it("should display expected background color on first property", function() {
        browser.waitForAngular();
        expect(mainPage.resultsProperties.get(0).element(by.css(".propertyTop")).getCssValue('background-color')).toEqual(mainPage.firstBackground);
    });

    it("should display expected property image on first property", function() {
        browser.waitForAngular();
        expect(mainPage.resultsProperties.get(0).element(by.css(".propertyInner img")).getAttribute('src')).toMatch(mainPage.firstMainImage);
    });

    it("should display expected price on first property", function() {
        browser.waitForAngular();
        expect(mainPage.resultsProperties.get(0).element(by.css(".propertyBottom")).getText()).toEqual(mainPage.firstPrice);
    });
});

describe("Results Properties - Other Results Property Displays", function() {
    let mainPage = new MainPage();
    
    beforeEach(function(){
        browser.get(mainPage.mainURL);
    });

    it("should display expected logo on second property", function() {
        browser.waitForAngular();
        expect(mainPage.resultsProperties.get(1).element(by.css(".agencyLogo")).getAttribute('src')).toMatch(mainPage.secondLogo);
    });

    it("should display expected logo on second property", function() {
        browser.waitForAngular();
        expect(mainPage.resultsProperties.get(1).element(by.css(".agencyLogo")).getAttribute('src')).toMatch(mainPage.thirdLogo);
    });
});
