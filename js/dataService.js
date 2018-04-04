(function(){
    'use strict'
    let app = angular.module('REA');

    app.service('dataService', dataService);

    dataService.$inject = ['$q', '$http', 'constants'];

    function dataService($q, $http, constants){
        return {
            getAllProperties: getAllProperties,
            getResultsProperties: getResultsProperties,
            getSavedProperties: getSavedProperties
        };

        function getAllProperties() {
            return $http.get(constants.PROPERTIES_URL)
            .then(
                function(data){
                    return data;
                },
                function(data){
                    return $q.reject('Error retrieving all properties. (HTTP status: ' + data.status + ')');
                }
            );
        }
        function getResultsProperties(){
            let responseDataPromise = getAllProperties().then(function(data){
                return data.data.results;
            },
            function (data){
                throw new Error(data);
            });
            return responseDataPromise;
        }
        function getSavedProperties(){
            let responseDataPromise = getAllProperties().then(function(data){
                return data.data.saved;
            },
            function (data){
                throw new Error(data);
            });
            return responseDataPromise;
        }
    }    
})();