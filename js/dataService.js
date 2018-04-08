(function(){
    'use strict'
    let app = angular.module('REA');

    app.service('dataService', dataService);

    dataService.$inject = ['$q', '$http', 'constants'];

    function dataService($q, $http, constants){

        return {
            getAllProperties: getAllProperties,
            getResultsProperties: getResultsProperties,
            getSavedProperties: getSavedProperties,
            savedData: savedData
        };
        var savedData; //needs to be a var to ensure if it does not already exist it's declaration is hoisted

        function getAllProperties() {
            return $http.get(constants.PROPERTIES_URL)
            .then(
                function(data){
                    return data;
                },
                function(data){                    
                    let reTest = new RegExp(constants.ERROR_DETAIL_TO_BE_REPLACED,'g');
                    return $q.reject(constants.DATA_RETRIEVE_ERROR.replace(reTest,data.status));
                    //Use the error defined in the constants service and update it to reflect the errored status
                }
            );
        }
        function getResultsProperties(){
            let responseDataPromise = getAllProperties().then(function(data){
                return data.data.results;
            },
            function (data){
                throw new Error(data);
                // Unsure of requirements regarding what to do if an error occurs retrieving results data, need to check with users
            });
            return responseDataPromise;
        }
        function getSavedProperties(){
            let responseDataPromise = getAllProperties().then(function(data){
                return data.data.saved;
            },
            function (data){
                throw new Error(data);
                // Unsure of requirements regarding what to do if an error occurs retrieving saved data, need to check with users
            });
            return responseDataPromise;
        }
    }    
})();