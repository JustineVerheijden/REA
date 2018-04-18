'use strict'
describe('Property Directive', ()=> {
    //the testing of the directive is not thorough as the directive is mainly a container for repeated HTML. 
    //This test is mainly to prove that the directive is acting as it should not to test every single element is displayed. 
    //Please refer to integration/protractor tests for element display checks.
    let $compile,$rootScope, $scope;
    const TEMPLATE_PATH = '../dist/property.html';
    const TEMPLATE_NAME = 'property.html';
    const PROPERTY_PRICE_WITH_TAGS = '<property price=$123.12></property>';
    const PROPERTY_PRICE = '$123.12';
  
    beforeEach(module('REA.propertyDirective'));

    beforeEach(inject((_$compile_, _$rootScope_)=>{
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = _$rootScope_;
    }));
    beforeEach(inject(($templateCache)=> {
        let propertyTemplate = null;
        var xhr = new XMLHttpRequest()
        xhr.open('get', TEMPLATE_PATH);
        xhr.send()
        $templateCache.put(TEMPLATE_NAME, propertyTemplate);
    }));
    describe('Updates price with one passed in', () => {
        let element;
        beforeEach(() => {
            element = $compile(PROPERTY_PRICE_WITH_TAGS)($scope);
            angular.element(document.body).append(element);
        });

        afterEach(() => {
            element.remove();
        });

        it('correct price is displayed', () => {
            expect(element[0].outerHTML).toContain(PROPERTY_PRICE);
        });
    });
  });