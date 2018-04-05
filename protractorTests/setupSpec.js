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