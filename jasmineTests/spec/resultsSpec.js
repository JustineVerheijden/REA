'use strict'
describe('Results Controller', function(){
    let $rootScope, $scope, $q, dataService, $controller;
    let resultsValue={};    
    let propertyExistsError = 'Error, property can only be added once';

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
            $controller = $controller('ResultsController', {$scope:$scope, dataService:dataService});
            expect($controller).toBeDefined();
        });
        
        it("should retrieve data from data service", function(){
            spyOn(dataService, 'getResultsProperties').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(resultsValue);
                return deferred.promise;    
            });
            $controller = $controller('ResultsController', {$scope:$scope, dataService:dataService});
            $rootScope.$apply();
            expect(dataService.getResultsProperties).toHaveBeenCalled();
        });
    });

    xdescribe('Update Saved Property', function(){
        it("should return true if property exists in the saved column (if it does, it can't be added again)", function(){
            dataService.savedData=[{id:1,name:'test'}, {id:2,name:'test2'}];
            $controller = $controller('ResultsController', {$scope:$scope, dataService:dataService});
            expect($controller.propertyExistsInSaved(1)).toBeTruthy();
        });

        it("should return false if property exists in the saved column (if it does, it can't be added again)", function(){
            dataService.savedData=[{id:1,name:'test'}, {id:2,name:'test2'}];
            $controller = $controller('ResultsController', {$scope:$scope, dataService:dataService});
            expect($controller.propertyExistsInSaved(3)).toBeFalsy();
        });

        it("should update the dataService with the property", function(){
            dataService.savedData=[{id:1,name:'test'}, {id:2,name:'test2'}];
            let newData = {id:3,name:'test3'};
            $controller = $controller('ResultsController', {$scope:$scope, dataService:dataService});
            $controller.processProperty(newData);
            expect(dataService.savedData.length).toBe(3);
        });

        it("should not update the dataService with a property that already exists in the saved column, an error should be thrown", function(){
            dataService.savedData=[{id:1,name:'test'}, {id:2,name:'test2'}];
            let newData = {id:1,name:'test'};
            $controller = $controller('ResultsController', {$scope:$scope, dataService:dataService});
            expect(function() {
                $controller.processProperty(newData);
            }).toThrowError(propertyExistsError); 
            
        });

        it("should update the dataService with property, the ID being updated to remove 'result'", function(){
            dataService.savedData=[{id:1,name:'test'}, {id:2,name:'test2'}];
            let newData = {id:'result'+3,name:'test3'};
            $controller = $controller('ResultsController', {$scope:$scope, dataService:dataService});
            $scope.addSavedProperty(newData);
            expect(dataService.savedData.length).toBe(3);
            expect(dataService.savedData[2].id).toBe('3');
        });
    });
});