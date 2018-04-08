(function(){
    'use strict'
    let app = angular.module('REA')

    app.directive('property', property);

    property.$inject = ['constants'];

    function property(constants){
        return {
            templateUrl: "property.html",
            restrict: "E",
            scope: {
                propertyData: '<',
                showAddButton: '<',
                showRemoveButton: '<',
                id: '=',
                removeSavedProperty: "&removeProperty", //method that exists on Saved Controller
                addSavedProperty: "&addProperty" //method that exists on Results Controller
            },
            link: function (scope) {
                //Update the ID for each element with whether it is RESULT or SAVED property
                scope.id = scope.showAddButton?constants.RESULT_INDICATOR+scope.id:scope.id;
                scope.id = scope.showRemoveButton?constants.SAVED_INDICATOR+scope.id:scope.id;

                scope.hoverIn = function(){
                    //Only display relevant button when user hovers mouse over element
                    scope.showAddButtonToggle = scope.showAddButton?true:false;
                    scope.showRemoveButtonToggle = scope.showRemoveButton?true:false;
                }
                scope.hoverOut = function(){
                    //Hide all buttons when user leaves element
                    scope.showAddButtonToggle = false;
                    scope.showRemoveButtonToggle = false;
                }
            }
        }
    }
})();