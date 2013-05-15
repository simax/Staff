'use strict';

xdescribe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('StaffApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of departments to the scope', function () {
    expect(scope.departments.length).toBe(3);
  });
});
