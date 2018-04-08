describe('Constants service', function() {
	let constants = {};
	let retrieveError = '##REA_DATA_RETRIEVE_ERROR##';
	let constantsData = { 
		PROPERTIES_URL : './json/mock.json',
		PROPERTY_EXISTS_ERROR: 'Error, property can only be added once',
		ERROR_DETAIL_TO_BE_REPLACED: retrieveError,
		DATA_RETRIEVE_ERROR: 'Error retrieving all properties. (HTTP status: '+retrieveError+')',
		RESULT_INDICATOR: 'result',
        SAVED_INDICATOR: 'saved'
	}
    
	beforeEach(module('REA'));

	beforeEach(inject(function(_constants_) {
		constants = _constants_;
	}));

	it('should have the properties URL constant set', function() {
		expect(angular.mock.dump(constants.PROPERTIES_URL)).toEqual(constantsData.PROPERTIES_URL);
	});

	it('should have the Property Exists Error constant set', function() {
		expect(angular.mock.dump(constants.PROPERTY_EXISTS_ERROR)).toEqual(constantsData.PROPERTY_EXISTS_ERROR);
	});

	it('should have the Error Detail to be Replaced constant set', function() {
		expect(angular.mock.dump(constants.ERROR_DETAIL_TO_BE_REPLACED)).toEqual(constantsData.ERROR_DETAIL_TO_BE_REPLACED);
	});

	it('should have the Retrieve Data Error constant set', function() {
		expect(angular.mock.dump(constants.DATA_RETRIEVE_ERROR)).toEqual(constantsData.DATA_RETRIEVE_ERROR);
	});

	it('should have the Result Indicator constant set', function() {
		expect(angular.mock.dump(constants.RESULT_INDICATOR)).toEqual(constantsData.RESULT_INDICATOR);
	});
	it('should have the Saved Indicator constant set', function() {
		expect(angular.mock.dump(constants.SAVED_INDICATOR)).toEqual(constantsData.SAVED_INDICATOR);
	});
	
});