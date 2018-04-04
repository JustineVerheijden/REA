describe('Constants service', function() {
	let constants = {};
	var constantsData = { 
		PROPERTIES_URL : './json/mock.json'
	}
    
	beforeEach(module('REA'));

	beforeEach(inject(function(_constants_) {
		constants = _constants_;
	}));

	it('should have the properties URL constant set', function() {
		expect(angular.mock.dump(constants.PROPERTIES_URL)).toEqual(constantsData.PROPERTIES_URL);
	});
	
});