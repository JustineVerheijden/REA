angular.module('REA').directive('property', function() {
    return {
      templateUrl: "property.html",
      restrict: "E",
      scope: {
        bkgColor:'<',
        agencyLogo:'<',
        mainImage:'<',
        price: '<'
      }
    }
  });