'use strict'
describe('Results Controller', function(){
    var $controller;    

    beforeEach(module('REA'));
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    describe('Initialise controller', function(){
        
        it("should be created successfully", function() {
            $controller = $controller('ResultsController');
            expect($controller).toBeDefined();
        });
    })
});