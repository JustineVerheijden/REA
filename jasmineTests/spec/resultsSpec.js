'use strict'
describe('Results Controller', function(){
    let $rootScope, $q, dataService, $controller;
    let resultsValue={};    

    beforeEach(module('REA'));
    beforeEach(inject(function(_$rootScope_, _$q_, _dataService_, _$controller_){
        $controller = _$controller_;
        dataService = _dataService_;
        $q = _$q_;
        $rootScope = _$rootScope_;
    }));
    describe('Initialise controller', function(){
        it("should be created successfully", function() {
            $controller = $controller('ResultsController', {dataService:dataService});
            expect($controller).toBeDefined();
        });
        
        it("should retrieve data from data service", function(){
            spyOn(dataService, 'getResultsProperties').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(resultsValue);
                return deferred.promise;    
            });
            $controller = $controller('ResultsController', {dataService:dataService});
            $rootScope.$apply();
            expect(dataService.getResultsProperties).toHaveBeenCalled();
        });
    });
});