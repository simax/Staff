'use strict';

describe('Service: DepartmentsModel', function () {

    // load the service's module
    beforeEach(module('StaffApp.services'));

    // load the controller's module
    beforeEach(module('restangular'));

    // instantiate service
    var departmentsModel;

    beforeEach(inject(function (DepartmentsModel) {
        departmentsModel = DepartmentsModel;
    }));

    it('departmentsModel should be defined', function () {
        expect(departmentsModel).toBeDefined();
    });

    it('should have method getDepartments()', function () {
        expect(departmentsModel.getDepartments()).toBeDefined();
    });

    it('should have method getDepartments()', function () {
        expect(departmentsModel.getDepartmentById()).toBeDefined();
    });

    it('should have method getDepartments()', function () {
        expect(departmentsModel.getEmployeeById()).toBeDefined();
    });

});
