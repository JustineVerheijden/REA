import angular from 'angular';
import constantsModule from './constants';

const dataService = angular.module('REA.dataService',[constantsModule.name]);
dataService.$inject = ['$http', '$q', 'constants'];
dataService.service('dataService',dataServiceFunction);

function dataServiceFunction($http, $q, constants){
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

    let getSavedProperties = (savedPropertiesControllerThis)=>{
        let responseDataPromise = getAllProperties().then((data)=>{
            savedPropertiesControllerThis.savedData = data.data.saved;
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
        getResultsProperties,
        getSavedProperties
    };
};
export default dataService;

