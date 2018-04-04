(function(){
    'use strict'
    let app = angular.module('REA');

    app.controller('ResultsController', ResultsController);

    ResultsController.$inject = ['dataService'];

    function ResultsController(dataService){
        let vm = this;
        dataService.getResultsProperties().then(function(data){
            vm.resultData = data;
        });
    }
})();