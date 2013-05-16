'use strict';

describe('Controller: StaffListController', function () {

  // load the controller's module
  beforeEach(module('StaffApp.controllers'));
  beforeEach(module('StaffApp.services'));

  var staffListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    staffListCtrl = $controller('StaffListController', {
      $scope: scope
    });
  }));

  it('should attach a list of departments to the scope', function () {
    expect(scope.departments.length).toBe(4);
  });
});
