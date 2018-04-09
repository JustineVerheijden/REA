(()=>{
    'use strict'
    let app = angular.module('REA');

    app.controller('SavedController', SavedController);

    SavedController.$inject = ['$scope','dataService'];

    function SavedController($scope, dataService){
        let vm = this;
        dataService.getSavedProperties().then((data)=>{
            // store Saved Data in data service to allow it to be used by other controllers etc
            dataService.savedData = data; 
            vm.saveData = dataService.savedData;
        });

        //needed to ensure model is kept up to date with any changes that happen to the data service outside of this controller
        vm.saveData = dataService.savedData;

        $scope.removeSavedProperty = (id)=>{
            dataService.savedData = dataService.savedData.filter((index)=>{
                //only keep properties that weren't passed in to this function
                return index.id !== id;
            })
            vm.saveData = dataService.savedData;
        }
    }
})();