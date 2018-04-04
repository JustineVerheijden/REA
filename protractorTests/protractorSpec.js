"use strict"
let MainPage = require ('./selectProperties.js');


describe("Integration testing of REA Code Challenge", function() {
    let mainPage = new MainPage();
    
    beforeEach(function(){
        browser.get(mainPage.mainURL);
    });

    it("should display Select Properties page", function() {
        browser.waitForAngular();
        expect(browser.getCurrentUrl()).toMatch(mainPage.mainURL);
    });

});

describe("First Property Display", function() {

    it("should display expected logo on first property", function() {
        let firstImage = 'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif';
        browser.waitForAngular();
        expect(element.all(by.repeater('result in resultsController.resultData')).get(0).element(by.css(".agencyLogo")).getAttribute('src')).toMatch(firstImage);
    });

    it("should display expected background color on first property", function() {
        let firstBackground = 'rgba\(255, 229, 18, 1\)';
        browser.waitForAngular();
        expect(element.all(by.repeater('result in resultsController.resultData')).get(0).element(by.css(".propertyTop")).getCssValue('background-color')).toEqual(firstBackground);
    });

    it("should display expected property image on first property", function() {
        let firstMainImage = 'http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg';
        browser.waitForAngular();
        expect(element.all(by.repeater('result in resultsController.resultData')).get(0).element(by.css(".propertyInner img")).getAttribute('src')).toMatch(firstMainImage);
    });

    it("should display expected price on first property", function() {
        let firstPrice = '$726,500';
        browser.waitForAngular();
        expect(element.all(by.repeater('result in resultsController.resultData')).get(0).element(by.css(".propertyBottom")).getText()).toEqual(firstPrice);
    });
});

describe("Other Results Property Displays", function() {

    it("should display expected logo on second property", function() {
        let secondLogo = 'http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif';
        browser.waitForAngular();
        expect(element.all(by.repeater('result in resultsController.resultData')).get(1).element(by.css(".agencyLogo")).getAttribute('src')).toMatch(secondLogo);
    });

    it("should display expected logo on second property", function() {
        let thirdLogo = 'http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif';
        browser.waitForAngular();
        expect(element.all(by.repeater('result in resultsController.resultData')).get(1).element(by.css(".agencyLogo")).getAttribute('src')).toMatch(thirdLogo);
    });
});

describe("Saved Property Display", function() {

    it("should display expected logo on first saved property", function() {
        let firstImage = 'http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif';
        browser.waitForAngular();
        expect(element.all(by.repeater('save in savedController.saveData')).get(0).element(by.css(".agencyLogo")).getAttribute('src')).toMatch(firstImage);
    });

    it("should display expected background color on first saved property", function() {
        let firstBackground = 'rgba\(0, 0, 0, 1\)';
        browser.waitForAngular();
        expect(element.all(by.repeater('save in savedController.saveData')).get(0).element(by.css(".propertyTop")).getCssValue('background-color')).toEqual(firstBackground);
    });

    it("should display expected property image on first saved property", function() {
        let firstMainImage = 'http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg';
        browser.waitForAngular();
        expect(element.all(by.repeater('save in savedController.saveData')).get(0).element(by.css(".propertyInner img")).getAttribute('src')).toMatch(firstMainImage);
    });

    it("should display expected price on first saved property", function() {
        let firstPrice = '$526,500';
        browser.waitForAngular();
        expect(element.all(by.repeater('save in savedController.saveData')).get(0).element(by.css(".propertyBottom")).getText()).toEqual(firstPrice);
    });
});