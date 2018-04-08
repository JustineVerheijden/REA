"use strict"
let MainPage = require ('./selectProperties.js');

describe("User Interaction with add button", function() {
    let mainPage = new MainPage();
    
    beforeEach(function(){
        browser.get(mainPage.mainURL);
    });

    it("should display 'add property' button when use moves mouse over a property card in the results section", function() {
        browser.waitForAngular();
        expect(mainPage.addButton1.isDisplayed()).toBeFalsy();
        browser.actions().mouseMove(mainPage.propertyResult1).perform();
        expect(mainPage.addButton1.isDisplayed()).toBeTruthy();
    });

    it("should hide 'add property' button when use moves mouse off a property card in the results section", function() {
        browser.waitForAngular();
        browser.actions().mouseMove(mainPage.propertyResult2).perform();
        mainPage.addButton2.isDisplayed().then(function(){
            expect(mainPage.addButton2.isDisplayed()).toBeTruthy();
            browser.actions().mouseMove(mainPage.propertyResult3).perform();
            expect(mainPage.addButton2.isDisplayed()).toBeFalsy();
        });
    });

    it("should add property to the 'saved' column when the 'add property' button is clicked", function() {
        browser.waitForAngular();
        browser.actions().mouseMove(mainPage.propertyResult2).perform();
        mainPage.addButton2.isDisplayed().then(function(){
            mainPage.addButton2.click();
            expect(mainPage.savedProperties.get(1).isDisplayed()).toBeTruthy();
            expect(mainPage.propertySaved2.isDisplayed()).toBeTruthy();
        });
    });

    it("should add all the properties to the 'saved' column when their associated 'add property' button is clicked", function() {
        browser.waitForAngular();
        browser.actions().mouseMove(mainPage.propertyResult2).perform();
        mainPage.addButton2.isDisplayed().then(function(){
            mainPage.addButton2.click();
            expect(mainPage.savedProperties.get(1).isDisplayed()).toBeTruthy();
            expect(mainPage.propertySaved2.isDisplayed()).toBeTruthy();
        });
        browser.actions().mouseMove(mainPage.propertyResult1).perform();
        mainPage.addButton1.isDisplayed().then(function(){
            mainPage.addButton1.click();
            expect(mainPage.savedProperties.get(2).isDisplayed()).toBeTruthy();
            expect(mainPage.propertySaved1.isDisplayed()).toBeTruthy();
        });
        browser.actions().mouseMove(mainPage.propertyResult3).perform();
        mainPage.addButton3.isDisplayed().then(function(){
            mainPage.addButton3.click();
            expect(mainPage.savedProperties.get(3).isDisplayed()).toBeTruthy();
            expect(mainPage.propertySaved3.isDisplayed()).toBeTruthy();
        });
    });

    it("should not allow property that is in the 'saved' column to be added again", function() {
        let numberOfSavedProperties;
        browser.waitForAngular();
        browser.actions().mouseMove(mainPage.propertyResult1).perform();
        mainPage.addButton1.isDisplayed().then(function(){
            mainPage.addButton1.click();
            mainPage.savedProperties.count().then(function(count) {
                numberOfSavedProperties = count;
            });
            browser.actions().mouseMove(mainPage.propertyResult1).perform();
            mainPage.addButton1.isDisplayed().then(function(){
                mainPage.addButton1.click();
                mainPage.savedProperties.count().then(function(count) {
                    expect(count).toBe(numberOfSavedProperties);
                });
            });    
        });
    });    
});
describe("User Interaction with remove button", function() {
    let mainPage = new MainPage();
    
    beforeEach(function(){
        browser.get(mainPage.mainURL);
        browser.actions().mouseMove(mainPage.propertyResult1).perform();
        mainPage.addButton1.isDisplayed().then(function(){
            mainPage.addButton1.click();
        });
        browser.actions().mouseMove(mainPage.propertyResult2).perform();
        mainPage.addButton2.isDisplayed().then(function(){
            mainPage.addButton2.click();
        });
        browser.actions().mouseMove(mainPage.propertyResult3).perform();
        mainPage.addButton3.isDisplayed().then(function(){
            mainPage.addButton3.click();
        });
    });

    it("should display 'remove property' button when user moves mouse over a property card in the saved section", function() {
        browser.waitForAngular();
        expect(mainPage.removeButton4.isDisplayed()).toBeFalsy();
        browser.actions().mouseMove(mainPage.propertySaved4).perform();
        expect(mainPage.removeButton4.isDisplayed()).toBeTruthy();
    });

    it("should hide 'remove property' button when user moves mouse off a property card in the saved section", function() {
        browser.waitForAngular();
        browser.actions().mouseMove(mainPage.propertySaved4).perform();
        expect(mainPage.removeButton4.isDisplayed()).toBeTruthy();
        browser.actions().mouseMove(mainPage.propertyResult3).perform();
        expect(mainPage.removeButton4.isDisplayed()).toBeFalsy();
    });

    it("should remove property from the 'saved' section when use clicks 'remove property' button", function() {
        let numberOfSavedProperties;
        browser.waitForAngular();
        mainPage.savedProperties.count().then(function(count) {
            numberOfSavedProperties = count;
        });
        browser.actions().mouseMove(mainPage.propertySaved3).perform();
        mainPage.removeButton3.isDisplayed().then(function(){
            mainPage.removeButton3.click();
            mainPage.savedProperties.count().then(function(count) {
                expect(count).toBe(numberOfSavedProperties-1);
            });
        });
    });

    it("should remove all the properies from the 'saved' section when use clicks each associated 'remove property' button", function() {
        let numberOfSavedProperties;
        browser.waitForAngular();
        mainPage.savedProperties.count().then(function(count) {
            numberOfSavedProperties = count;
        });
        browser.actions().mouseMove(mainPage.propertySaved3).perform();
        mainPage.removeButton3.isDisplayed().then(function(){
            mainPage.removeButton3.click();
            mainPage.savedProperties.count().then(function(count) {
                numberOfSavedProperties--;
                expect(count).toBe(numberOfSavedProperties);
            });
        });
        browser.actions().mouseMove(mainPage.propertySaved1).perform();
        mainPage.removeButton1.isDisplayed().then(function(){
            mainPage.removeButton1.click();
            mainPage.savedProperties.count().then(function(count) {
                numberOfSavedProperties--;
                expect(count).toBe(numberOfSavedProperties);
            });
        });
        browser.actions().mouseMove(mainPage.propertySaved2).perform();
        mainPage.removeButton2.isDisplayed().then(function(){
            mainPage.removeButton2.click();
            mainPage.savedProperties.count().then(function(count) {
                numberOfSavedProperties--;
                expect(count).toBe(numberOfSavedProperties);
            });
        });
        browser.actions().mouseMove(mainPage.propertySaved4).perform();
        mainPage.removeButton4.isDisplayed().then(function(){
            mainPage.removeButton4.click();
            mainPage.savedProperties.count().then(function(count) {
                numberOfSavedProperties--;
                expect(count).toBe(numberOfSavedProperties);
            });
        });
    });
});

describe("User Interaction with both add and remove buttons", function() {
    let mainPage = new MainPage();
    
    beforeEach(function(){
        browser.get(mainPage.mainURL);
    });
    
    it("should add and remove the same property multiple times", function() {
        let numberOfSavedProperties;
        browser.waitForAngular();
        browser.actions().mouseMove(mainPage.propertyResult2).perform();
        mainPage.addButton2.isDisplayed().then(function(){
            mainPage.addButton2.click();
        });
        mainPage.savedProperties.count().then(function(count) {
            numberOfSavedProperties = count;
        });
        browser.actions().mouseMove(mainPage.propertySaved2).perform();
        mainPage.removeButton2.isDisplayed().then(function(){
            mainPage.removeButton2.click();
            mainPage.savedProperties.count().then(function(count) {
                numberOfSavedProperties--;
                expect(count).toBe(numberOfSavedProperties);
            });
        });
        browser.waitForAngular();
        browser.actions().mouseMove(mainPage.propertyResult2).perform();
        mainPage.addButton2.isDisplayed().then(function(){
            mainPage.addButton2.click();
        });
        mainPage.savedProperties.count().then(function(count) {
            numberOfSavedProperties = count;
        });
        browser.actions().mouseMove(mainPage.propertySaved2).perform();
        mainPage.removeButton2.isDisplayed().then(function(){
            mainPage.removeButton2.click();
            mainPage.savedProperties.count().then(function(count) {
                numberOfSavedProperties--;
                expect(count).toBe(numberOfSavedProperties);
            });
        });
        browser.waitForAngular();
        browser.actions().mouseMove(mainPage.propertyResult2).perform();
        mainPage.addButton2.isDisplayed().then(function(){
            mainPage.addButton2.click();
        });
        mainPage.savedProperties.count().then(function(count) {
            numberOfSavedProperties = count;
        });
    });
});