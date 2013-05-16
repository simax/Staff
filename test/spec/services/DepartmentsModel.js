'use strict';

describe('Service: DepartmentsModel', function () {

  // load the service's module
  beforeEach(module('StaffApp.services'));

  // instantiate service
  var departmentsModel;
    
  beforeEach(inject(function (DepartmentsModel) {
    departmentsModel = DepartmentsModel;
  }));

  it('should be defined', function () {
    expect(departmentsModel).toBeDefined();
  });

  it('should have method getDepartments()', function () {
    expect(departmentsModel.getDepartments()).toBeDefined();
  });

});
