(()=>{
    'use strict'
    let app = angular.module('REA');

    app.service('dataService', dataService);

    dataService.$inject = ['$q', '$http', 'constants'];

    function dataService($q, $http, constants){

        let savedData; 

        let getAllProperties = ()=>{
            return $http.get(constants.PROPERTIES_URL)
            .then((data)=>{
                    return data;
                },
                (data)=>{                    
                    let reTest = new RegExp(constants.ERROR_DETAIL_TO_BE_REPLACED,'g');
                    return $q.reject(constants.DATA_RETRIEVE_ERROR.replace(reTest,data.status));
                    //Use the error defined in the constants service and update it to reflect the errored status
                }
            );
        }
        let getResultsProperties = ()=>{
            let responseDataPromise = getAllProperties().then((data)=>{
                return data.data.results;
            },
            (data)=>{
                throw new Error(data);
                // Unsure of requirements regarding what to do if an error occurs retrieving results data, need to check with users
            });
            return responseDataPromise;
        }
        let getSavedProperties = ()=>{
            let responseDataPromise = getAllProperties().then((data)=>{
                return data.data.saved;
            },
            (data)=>{
                throw new Error(data);
                // Unsure of requirements regarding what to do if an error occurs retrieving saved data, need to check with users
            });
            return responseDataPromise;
        }

        return {
            getAllProperties,
            getResultsProperties,
            getSavedProperties,
            savedData
        };
    }    
})();