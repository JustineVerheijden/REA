class PropertyDirective {
    constructor() {
        this.restrict = 'E'
        this.templateUrl = "../dist/property.html"
        this.scope = {
            bkgColor:'<',
            agencyLogo:'<',
            mainImage:'<',
            price: '<'
        }
    }
}
let propertyDirective = angular.module('REA.propertyDirective',[]);

propertyDirective.directive('propertyDirective', [() => new PropertyDirective])

export default propertyDirective;
