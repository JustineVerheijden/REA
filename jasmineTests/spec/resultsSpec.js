'use strict'
describe('Results Controller', ()=>{
    let $rootScope, $scope, $q, dataService, $controller;
    let resultsValue={};    
    let propertyExistsError = 'Error, property can only be added once';

    beforeEach(module('REA'));
    beforeEach(inject((_$rootScope_, _$q_, _dataService_, _$controller_)=>{
        $controller = _$controller_;
        dataService = _dataService_;
        $q = _$q_;
        $rootScope = _$rootScope_;
        $scope = _$rootScope_;
    }));
    describe('Initialise controller', ()=>{
        it('should be created successfully', () => {
            $controller = $controller('ResultsController', {$scope:$scope, dataService:dataService});
            expect($controller).toBeDefined();
        });
        
        it('should retrieve data from data service', ()=>{
            spyOn(dataService, 'getResultsProperties').and.callFake(()=>{
                var deferred = $q.defer();
                deferred.resolve(resultsValue);
                return deferred.promise;    
            });
            $controller = $controller('ResultsController', {$scope:$scope, dataService:dataService});
            $rootScope.$apply();
            expect(dataService.getResultsProperties).toHaveBeenCalled();
        });
    });
});