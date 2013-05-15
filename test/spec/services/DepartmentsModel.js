'use strict';

describe('Service: DepartmentsModel', function () {

  // load the service's module
  beforeEach(module('StaffApp'));

  // instantiate service
  var DepartmentsModel;
  beforeEach(inject(function (_DepartmentsModel_) {
    DepartmentsModel = _DepartmentsModel_;
  }));

  it('should do something', function () {
    expect(DepartmentsModel).toBeDefined();
  });

});
