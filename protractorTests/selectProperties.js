module.exports = function() {
    this.mainURL = "http://localhost:3001";
    this.firstSavedElement = 'saved1';
    this.secondSavedElement = 'saved2';
    this.thirdSavedElement = 'saved3';
    this.fourthSavedElement = 'saved4';

    this.firstResultElement = 'result1';
    this.secondResultElement = 'result2';
    this.thirdResultElement = 'result3';

    this.firstImage = 'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif';
    this.firstBackground = 'rgba\(255, 229, 18, 1\)';
    this.firstMainImage = 'http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg';
    this.firstPrice = '$726,500';
    
    this.secondLogo = 'http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif';
    this.thirdLogo = 'http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif';
    
    this.savedFirstImage = 'http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif';
    this.savedFirstBackground = 'rgba\(0, 0, 0, 1\)';
    this.savedFirstMainImage = 'http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg';
    this.savedFirstPrice = '$526,500';

    this.savedProperties = element.all(by.repeater('save in savedPropertiesController.savedData'));
    this.resultsProperties = element.all(by.repeater('result in resultsController.resultData'));

    this.propertyResult1 = element(by.id(this.firstResultElement));
    this.propertyResult2 = element(by.id(this.secondResultElement));
    this.propertyResult3 = element(by.id(this.thirdResultElement));

    this.propertySaved1 = element(by.id(this.firstSavedElement));
    this.propertySaved2 = element(by.id(this.secondSavedElement));
    this.propertySaved3 = element(by.id(this.thirdSavedElement));
    this.propertySaved4 = element(by.id(this.fourthSavedElement));

    this.addButton1 = element(by.id(this.firstResultElement)).element(by.css('.propertyBottom')).element(by.css('.btnWrapper')).element(by.css('.btn-success'));
    this.addButton2 = element(by.id(this.secondResultElement)).element(by.css('.propertyBottom')).element(by.css('.btnWrapper')).element(by.css('.btn-success'));
    this.addButton3 = element(by.id(this.thirdResultElement)).element(by.css('.propertyBottom')).element(by.css('.btnWrapper')).element(by.css('.btn-success'))
    this.removeButton1 = element(by.id(this.firstSavedElement)).element(by.css('.propertyBottom')).element(by.css('.btnWrapper')).element(by.css('.btn-danger'));
    this.removeButton2 = element(by.id(this.secondSavedElement)).element(by.css('.propertyBottom')).element(by.css('.btnWrapper')).element(by.css('.btn-danger'));
    this.removeButton3 = element(by.id(this.thirdSavedElement)).element(by.css('.propertyBottom')).element(by.css('.btnWrapper')).element(by.css('.btn-danger'));
    this.removeButton4 = element(by.id(this.fourthSavedElement)).element(by.css('.propertyBottom')).element(by.css('.btnWrapper')).element(by.css('.btn-danger'));
}
