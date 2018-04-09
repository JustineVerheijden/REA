(()=>{
    'use strict'
    let app = angular.module('REA');

    app.controller('ResultsController', ResultsController);

    ResultsController.$inject = ['$scope','dataService', 'constants'];

    function ResultsController($scope, dataService, constants){
        let vm = this;
        dataService.getResultsProperties().then((data)=>{
            vm.resultData = data;
        });

        $scope.addSavedProperty = (propertyData)=>{
            let propertyToBeSaved ={};
            Object.assign(propertyToBeSaved, propertyData);
            //create complete copy of the property to be altered and potentially added to the saved properties
            let reTest = new RegExp(constants.RESULT_INDICATOR,'g');
            propertyToBeSaved.id = propertyToBeSaved.id.replace(reTest, '');
            //ensure property to be potentially added to the saved properties has a unique id 
            vm.processProperty(propertyToBeSaved);
        }
        
        vm.propertyExistsInSaved = (id)=>{
            let exists = dataService.savedData.filter((index)=>{
                return index.id == id;
            });
            return exists.length!==0;
        }
        
        vm.processProperty = (propertyToBeSaved)=> {
            if (!vm.propertyExistsInSaved(propertyToBeSaved.id)){
                //don't allow property to be displayed multiple times in the 'saved' column
                dataService.savedData.push(propertyToBeSaved);
            } else{
                throw new Error(constants.PROPERTY_EXISTS_ERROR);
                // Unsure of requirements regarding what to do if user clicks on add button more than once, need to check with users
            }
        }
    }
})();