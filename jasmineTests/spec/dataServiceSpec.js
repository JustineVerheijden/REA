'use strict'
describe('Data Service', function(){
    let dataService = {};
	let $httpBackend, $q, constants;
	let allPropertyData = {"results": [{"price": "$726,500","agency": {"brandingColors": {"primary": "#ffe512"},"logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"},"id": "1","mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"}, {"price": "$560,520","agency": {"brandingColors": {"primary": "#fcfa3b"},"logo": "http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif"},"id": "2","mainImage": "http://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"}, {"price": "$826,500","agency": {"brandingColors": {"primary": "#57B5E0"},"logo": "http://i1.au.reastatic.net/agencylogo/XCEWIN/12/20150807093203.gif"},"id": "3","mainImage": "http://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"}],"saved": [{"price": "$526,500","agency": {"brandingColors": {"primary": "#000000"},"logo": "http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif"},"id": "4","mainImage": "http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"}]};
    let propertiesURL = './json/mock.json';
    let dataRetrieveError = 'Error retrieving all properties. (HTTP status: 500)';

	beforeEach(module('REA'));

	beforeEach(inject(function(_$q_, _$httpBackend_, _dataService_, _constants_) {
		dataService = _dataService_;
        $httpBackend = _$httpBackend_;
        $q = _$q_;
        constants = _constants_;
	}));
    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation(false); 
        $httpBackend.verifyNoOutstandingRequest(false);
    });
    describe('Get All Properties function', function(){
	    it('should return all properties', function() {
		    let response;

		    $httpBackend.when('GET', propertiesURL)
            .respond(200,allPropertyData);

            dataService.getAllProperties()
            .then(function(data){
                response = data.data;
            });
            
            $httpBackend.flush();
            expect(response).toEqual(allPropertyData);
        });

        it('should handle all properties error', function() {
            let response;

            $httpBackend.when('GET', propertiesURL)
            .respond(500);
            dataService.getAllProperties()
            .then(function(data){
                response = data.data;

            })
            .catch(function(data){
                response = data;
            });
            $httpBackend.flush();
            expect(response).toEqual(dataRetrieveError);
        });
    });
    describe('Get Results Properties function', function(){
        it('should return only results properties', function() {
            let response;
            $httpBackend.when('GET', propertiesURL).respond(200,allPropertyData);

            dataService.getResultsProperties().then(function(data){
                response = data;
            });            
            $httpBackend.flush();
            
            expect(response).toEqual(allPropertyData.results);
        });

        it('should handle results properties error', function() {
            let response;

            expect(function() {
                $httpBackend.when('GET', propertiesURL).respond(500);
            
                let deferredResponse = dataService.getResultsProperties();
                
                deferredResponse.then(function(data){
                    response = data.data;
                });

                $httpBackend.flush();
            }).toThrowError(dataRetrieveError); 
        });
    });
});