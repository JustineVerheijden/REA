'use strict'
describe('Saved Controller', function(){
    let $rootScope, $scope, $q, dataService, $controller;
    let savedValue={};    

    beforeEach(module('REA'));
    beforeEach(inject(function(_$rootScope_, _$q_, _dataService_, _$controller_){
        $controller = _$controller_;
        dataService = _dataService_;
        $q = _$q_;
        $rootScope = _$rootScope_;
        $scope = _$rootScope_;
    }));
    describe('Initialise controller', function(){
        it("should be created successfully", function() {
            $controller = $controller('SavedController', {$scope:$scope, dataService:dataService});
            expect($controller).toBeDefined();
        });
        
        it("should retrieve data from data service", function(){
            spyOn(dataService, 'getSavedProperties').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(savedValue);
                return deferred.promise;    
            });
            $controller = $controller('SavedController', {$scope:$scope, dataService:dataService});
            $rootScope.$apply();
            expect(dataService.getSavedProperties).toHaveBeenCalled();
        });

        it("should display whatever data the 'savedData' variable is set to ", function(){
            dataService.savedData='abc';
            $controller = $controller('SavedController', {$scope:$scope, dataService:dataService});
            expect($controller.saveData).toBe(dataService.savedData);
        });
    });
    
    describe('Update Saved properties', function(){
        it("should removed property selected", function(){
            dataService.savedData=[{id:1,name:'test'},{id:2,name:'test2'}];
            $controller = $controller('SavedController', {$scope:$scope, dataService:dataService});
            $scope.removeSavedProperty(1)
            expect($controller.saveData.length).toBe(1);
            expect(dataService.savedData.length).toBe(1);
        });
    });
});