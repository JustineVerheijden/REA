import angular from 'angular';

const dataService = angular.module('REA.dataService',[]);
dataService.$inject = ['$http', '$q'];
dataService.service('dataService',dataServiceFunction);

function dataServiceFunction($http, $q){
    const PROPERTIES_URL = './json/mock.json';
    const RETRIEVE_ERROR = '##REA_DATA_RETRIEVE_ERROR##';
    const ERROR_DETAIL_TO_BE_REPLACED = RETRIEVE_ERROR;
    const DATA_RETRIEVE_ERROR = `Error retrieving all properties. (HTTP status: ${RETRIEVE_ERROR})`;

    let getAllProperties = ()=>{
        return $http.get(PROPERTIES_URL)
        .then((data)=>{
                return data;
            },
            (data)=>{                    
                let reTest = new RegExp(ERROR_DETAIL_TO_BE_REPLACED,'g');
                return $q.reject(DATA_RETRIEVE_ERROR.replace(reTest,data.status));
                //Use the error defined in the constants service and update it to reflect the errored status
            }
        );
    }
    let getResultsProperties = (resultsControllerThis)=>{
        let responseDataPromise = getAllProperties().then((data)=>{
            resultsControllerThis.resultData = data.data.results;
            return;
        },
        (data)=>{
            throw new Error(data);
            // Unsure of requirements regarding what to do if an error occurs retrieving results data, need to check with users
        });
        return responseDataPromise;
        
    }

    return {
        getAllProperties,
        getResultsProperties
    };
};
export default dataService;

