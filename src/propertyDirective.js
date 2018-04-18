import angular from 'angular';

class PropertyDirective {
    constructor() {
        this.restrict = 'E'
        this.templateUrl = "../dist/property.html"
        this.scope = {
            propertyData: '<',
            showAddButton: '<',
            showRemoveButton: '<',
            id: '=',
            removeSavedProperty: "&removeProperty" //if relevant - method that exists on Controller
        }
    }
    link(scope){
        scope.id = scope.showAddButton?'result'+scope.id:scope.id;
        scope.id = scope.showRemoveButton?'saved'+scope.id:scope.id;
        
        scope.hoverIn = ()=>{
            scope.showAddButtonToggle = scope.showAddButton?true:false;
            scope.showRemoveButtonToggle = scope.showRemoveButton?true:false;
        }
        scope.hoverOut = ()=>{
            scope.showAddButtonToggle = false;
            scope.showRemoveButtonToggle = false;
        }

        scope.addSavedProperty = ()=>{
            scope.$root.$emit('addSavedProperty', scope.propertyData)
        }
    }
}
let propertyDirective = angular.module('REA.propertyDirective',[]);

propertyDirective.directive('propertyDirective', [() => new PropertyDirective])

export default propertyDirective;
