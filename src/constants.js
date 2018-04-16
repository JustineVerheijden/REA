import angular from 'angular';

const constants = angular.module('REA.constants',[]);

let retrieveError = '##REA_DATA_RETRIEVE_ERROR##';

constants.constant('constants', {
    PROPERTIES_URL : './dist/json/mock.json',
    PROPERTY_EXISTS_ERROR: 'Error, property can only be added once',
    ERROR_DETAIL_TO_BE_REPLACED: retrieveError,
    DATA_RETRIEVE_ERROR: `Error retrieving all properties. (HTTP status: ${retrieveError})`,
    //ERROR_DETAIL_TO_BE_REPLACED is to be replaced with real error code
    RESULT_INDICATOR: 'result',
    SAVED_INDICATOR: 'saved'
});


export default constants;
