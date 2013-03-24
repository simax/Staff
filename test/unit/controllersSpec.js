'use strict';

describe('StaffListController', function(){
    var scope, ctrl;
    beforeEach(module('staffApp.controllers'));
    beforeEach(inject(function($rootScope, $controller) {
        scope = {};
        ctrl = $controller('StaffListController', {$scope: scope})
    }));

    it('StaffListController should be defined', function() {
        expect(ctrl).toBeDefined();
    });

    it('$scope.myData should be set to Simon', function() {
        expect(scope.myData).toBe('Simon');
    });

    it('$scope.departments should have a length of 4', function() {
        expect(scope.departments.length).toEqual(4);
    });

    it('Development department should have 3 employees', function() {
        expect(scope.departments[0].employees.length).toEqual(3);
    });

});


