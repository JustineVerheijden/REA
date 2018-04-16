'use strict'
describe('Property Directive', function() {
    //the testing of the directive is not thorough as the directive is mainly a container for repeated HTML. 
    //This test is mainly to prove that the directive is acting as it should not to test every single element is displayed. 
    //Please refer to integration/protractor tests for element display checks.
    let $compile,$rootScope, $scope;
  
    beforeEach(module('REA'));
  
    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = _$rootScope_;
    }));
    beforeEach(inject(function($templateCache) {
        let propertyTemplate = null;
        var xhr = new XMLHttpRequest()
        xhr.open("get", "../dist/property.html");
        xhr.send()
        $templateCache.put("property.html", propertyTemplate);
    }));
    describe('Updates price with one passed in', function () {
        let element;
        beforeEach(function () {
            element = $compile(
                '<property price=$123.12></property>')($scope);
            angular.element(document.body).append(element);
        });

        afterEach(function () {
            element.remove();
        });

        it('correct price is displayed', function () {
            expect(element[0].outerHTML).toContain('$123.12');
        });
    });
  });