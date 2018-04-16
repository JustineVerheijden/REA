class PropertyDirective {
    constructor() {
        this.restrict = 'E'
        this.templateUrl = "../dist/property.html"
        this.scope = {
            bkgColor:'<',
            agencyLogo:'<',
            mainImage:'<',
            price: '<',
            showAddButton: '<',
            showRemoveButton: '<',
            id: '='
        }
    }
    link(scope){
        console.log(scope.id);
        scope.id = scope.showAddButton?'result'+scope.id:scope.id;
        scope.id = scope.showRemoveButton?'saved'+scope.id:scope.id;
        console.log(scope.id);
        
        scope.hoverIn = function(){
            scope.showAddButtonToggle = scope.showAddButton?true:false;
            scope.showRemoveButtonToggle = scope.showRemoveButton?true:false;
        }
        scope.hoverOut = function(){
            scope.showAddButtonToggle = false;
            scope.showRemoveButtonToggle = false;
        }
    }
}
let propertyDirective = angular.module('REA.propertyDirective',[]);

propertyDirective.directive('propertyDirective', [() => new PropertyDirective])

export default propertyDirective;
