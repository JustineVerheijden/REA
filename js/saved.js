(function(){
    'use strict'
    let app = angular.module('REA');

    app.controller('SavedController', SavedController);

    SavedController.$inject = ['dataService'];

    function SavedController(dataService){
        let vm = this;
        dataService.getSavedProperties().then(function(data){
            vm.saveData = data;
        });
    }
})();