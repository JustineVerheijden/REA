angular.module('REA').directive('property', function() {
    return {
      templateUrl: "property.html",
      restrict: "E",
      scope: {
        bkgColor:'<',
        agencyLogo:'<',
        mainImage:'<',
        price: '<',
        showAddButton: '<',
        showRemoveButton: '<',
        id: '='
      },
      link: function (scope) {
        scope.id = scope.showAddButton?'result'+scope.id:scope.id;
        scope.id = scope.showRemoveButton?'saved'+scope.id:scope.id;
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
  });