'use strict'
let MainPage = require ('./selectProperties.js');


describe("Integration testing of REA Code Challenge", ()=> {
    let mainPage = new MainPage();
    
    beforeEach(()=>{
        browser.get(mainPage.mainURL);
    });

    it("should display Select Properties page", ()=> {
        browser.waitForAngular();
        expect(browser.getCurrentUrl()).toMatch(mainPage.mainURL);
    });

});