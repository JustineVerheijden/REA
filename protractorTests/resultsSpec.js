'use strict'
let MainPage = require ('./selectProperties.js');

describe('Results Properties - First Property Display', ()=> {
    let mainPage = new MainPage();
    
    beforeEach(()=>{
        browser.get(mainPage.mainURL);
    });

    it('should display expected logo on first property', ()=> {
        browser.waitForAngular();
        expect(mainPage.resultsProperties.get(0).element(by.css('.agencyLogo')).getAttribute('src')).toMatch(mainPage.firstImage);
    });

    it('should display expected background color on first property', ()=> {
        browser.waitForAngular();
        expect(mainPage.resultsProperties.get(0).element(by.css('.propertyTop')).getCssValue('background-color')).toEqual(mainPage.firstBackground);
    });

    it('should display expected property image on first property', ()=> {
        browser.waitForAngular();
        expect(mainPage.resultsProperties.get(0).element(by.css('.propertyInner img')).getAttribute('src')).toMatch(mainPage.firstMainImage);
    });

    it('should display expected price on first property', ()=> {
        browser.waitForAngular();
        expect(mainPage.resultsProperties.get(0).element(by.css('.propertyBottom')).getText()).toEqual(mainPage.firstPrice);
    });
});

describe('Results Properties - Other Results Property Displays', ()=> {
    let mainPage = new MainPage();
    
    beforeEach(()=>{
        browser.get(mainPage.mainURL);
    });

    it('should display expected logo on second property', ()=> {
        browser.waitForAngular();
        expect(mainPage.resultsProperties.get(1).element(by.css('.agencyLogo')).getAttribute('src')).toMatch(mainPage.secondLogo);
    });

    it('should display expected logo on third property', ()=> {
        browser.waitForAngular();
        expect(mainPage.resultsProperties.get(2).element(by.css('.agencyLogo')).getAttribute('src')).toMatch(mainPage.thirdLogo);
    });
});
