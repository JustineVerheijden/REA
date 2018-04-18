'use strict'
describe('Saved Controller', ()=>{
    let $rootScope, $scope, $q, dataService, $controller, constants;
    let savedValue={};    

    beforeEach(module('REA'));
    beforeEach(inject((_$rootScope_, _$q_, _dataService_, _constants_, _$controller_)=>{
        $controller = _$controller_;
        dataService = _dataService_;
        $q = _$q_;
        $rootScope = _$rootScope_;
        $scope = _$rootScope_;
        constants = _constants_;
    }));

    describe('Initialise controller', ()=>{
        it('should be created successfully', ()=> {
            $controller = $controller('SavedPropertiesController', {$rootScope, $scope, dataService, constants});
            expect($controller).toBeDefined();
        });
        
        it('should retrieve data from data service', ()=>{
            spyOn(dataService, 'getSavedProperties').and.callFake(()=>{
                var deferred = $q.defer();
                deferred.resolve(savedValue);
                return deferred.promise;    
            });
            $controller = $controller('SavedPropertiesController', {$rootScope, $scope, dataService, constants});
            $rootScope.$apply();
            expect(dataService.getSavedProperties).toHaveBeenCalled();
        });
    });
    
    describe('Update Saved properties', ()=>{
        it('should removed property selected', ()=>{
            $controller = $controller('SavedPropertiesController', {$rootScope, $scope, dataService, constants});
            $controller.savedData=[{id:1,name:'test'},{id:2,name:'test2'}];
            $scope.removeSavedProperty(1)
            expect($controller.savedData.length).toBe(1);
        });
    });
    
    describe('Update Saved Property', ()=>{
        it('should return true if property exists in the saved column (if it does, it can\'t be added again)', ()=>{
            $controller = $controller('SavedPropertiesController', {$rootScope, $scope, dataService, constants});
            $controller.savedData=[{id:'saved1',name:'test'}, {id:'saved2',name:'test2'}];
            expect($controller.propertyExistsInSaved(1)).toBeTruthy();
        });

        it('should return false if property exists in the saved column (if it does, it can\'t be added again)', ()=>{
            $controller = $controller('SavedPropertiesController', {$rootScope, $scope, dataService, constants});
            $controller.savedData=[{id:1,name:'test'}, {id:2,name:'test2'}];
            expect($controller.propertyExistsInSaved(3)).toBeFalsy();
        });

        it('should update the saved properties list with the property', ()=>{
            let newData = {id:3,name:'test3'};
            $controller = $controller('SavedPropertiesController', {$rootScope, $scope, dataService, constants});
            $controller.savedData=[{id:1,name:'test'}, {id:2,name:'test2'}];
            $controller.processProperty(newData);
            expect($controller.savedData.length).toBe(3);
        });

        it('should not update the saved properties list with a property that already exists in the saved column, an error should be thrown', ()=>{
            let newData = {id:1,name:'test'};
            $controller = $controller('SavedPropertiesController', {$rootScope, $scope, dataService, constants});
            $controller.savedData=[{id:'saved1',name:'test'}, {id:'saved2',name:'test2'}];
            expect(()=> {
                $controller.processProperty(newData);
            }).toThrowError(constants.PROPERTY_EXISTS_ERROR); 
            
        });

        it('should update the saved properties list with property, the ID being updated to remove \'result\'', ()=>{
            let newData = {id:'result'+3,name:'test3'};
            $controller = $controller('SavedPropertiesController', {$rootScope, $scope, dataService, constants});
            $controller.savedData=[{id:1,name:'test'}, {id:2,name:'test2'}];
            $controller.addSavedProperty(newData);
            expect($controller.savedData.length).toBe(3);
            expect($controller.savedData[2].id).toBe('3');
        });
    });

});