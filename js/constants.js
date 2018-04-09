(()=>{
    let app = angular.module('REA');

    app.constant('constants', (function(){
        let retrieveError = '##REA_DATA_RETRIEVE_ERROR##';
        return {
            PROPERTIES_URL : './json/mock.json',
            PROPERTY_EXISTS_ERROR: 'Error, property can only be added once',
            ERROR_DETAIL_TO_BE_REPLACED: retrieveError,
            DATA_RETRIEVE_ERROR: `Error retrieving all properties. (HTTP status: ${retrieveError})`,
            //ERROR_DETAIL_TO_BE_REPLACED is to be replaced with real error code
            RESULT_INDICATOR: 'result',
            SAVED_INDICATOR: 'saved'
        }}
    )());
})();
