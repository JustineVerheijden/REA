"use strict"
let MainPage = require ('./selectProperties.js');

describe("Saved Property Display", function() {
    let mainPage = new MainPage();
    
    beforeEach(function(){
        browser.get(mainPage.mainURL);
    });

    it("should display 'add property' button when use moves mouse over a property card in the results section", function() {
        browser.waitForAngular();
        expect(element(by.id('result1')).element(by.css('.propertyBottom')).element(by.css('.btnWrapper')).element(by.css('.btn-success')).isDisplayed()).toBeFalsy();
        browser.actions().mouseMove(element(by.id('result1'))).perform();
        expect(element(by.id('result1')).element(by.css('.propertyBottom')).element(by.css('.btnWrapper')).element(by.css('.btn-success')).isDisplayed()).toBeTruthy();
    });

    it("should hide 'add property' button when use moves mouse off a property card in the results section", function() {
        browser.waitForAngular();
        browser.actions().mouseMove(element(by.id('result2'))).perform();
        expect(element(by.id('result2')).element(by.css('.propertyBottom')).element(by.css('.btnWrapper')).element(by.css('.btn-success')).isDisplayed()).toBeTruthy();
        browser.actions().mouseMove(element(by.id('result3'))).perform();
        expect(element(by.id('result2')).element(by.css('.propertyBottom')).element(by.css('.btnWrapper')).element(by.css('.btn-success')).isDisplayed()).toBeFalsy();
    });

    it("should display 'remove property' button when use moves mouse over a property card in the saved section", function() {
        browser.waitForAngular();
        expect(element(by.id('saved4')).element(by.css('.propertyBottom')).element(by.css('.btnWrapper')).element(by.css('.btn-danger')).isDisplayed()).toBeFalsy();
        browser.actions().mouseMove(element(by.id('saved4'))).perform();
        expect(element(by.id('saved4')).element(by.css('.propertyBottom')).element(by.css('.btnWrapper')).element(by.css('.btn-danger')).isDisplayed()).toBeTruthy();
    });

    it("should hide 'remove property' button when use moves mouse off a property card in the saved section", function() {
        browser.waitForAngular();
        browser.actions().mouseMove(element(by.id('saved4'))).perform();
        expect(element(by.id('saved4')).element(by.css('.propertyBottom')).element(by.css('.btnWrapper')).element(by.css('.btn-danger')).isDisplayed()).toBeTruthy();
        browser.actions().mouseMove(element(by.id('result3'))).perform();
        expect(element(by.id('saved4')).element(by.css('.propertyBottom')).element(by.css('.btnWrapper')).element(by.css('.btn-danger')).isDisplayed()).toBeFalsy();
    });
});