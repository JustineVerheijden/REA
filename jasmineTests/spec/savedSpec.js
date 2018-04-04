'use strict'
describe('Saved Controller', function(){
    let $rootScope, $q, dataService, $controller;
    let savedValue={};    

    beforeEach(module('REA'));
    beforeEach(inject(function(_$rootScope_, _$q_, _dataService_, _$controller_){
        $controller = _$controller_;
        dataService = _dataService_;
        $q = _$q_;
        $rootScope = _$rootScope_;
    }));
    describe('Initialise controller', function(){
        it("should be created successfully", function() {
            $controller = $controller('SavedController', {dataService:dataService});
            expect($controller).toBeDefined();
        });
        
        it("should retrieve data from data service", function(){
            spyOn(dataService, 'getSavedProperties').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(savedValue);
                return deferred.promise;    
            });
            $controller = $controller('SavedController', {dataService:dataService});
            $rootScope.$apply();
            expect(dataService.getSavedProperties).toHaveBeenCalled();
        });
    });
});