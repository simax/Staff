'use strict';

xdescribe('Directive: employeeItem', function () {
  beforeEach(module('StaffApp.directives'));
  beforeEach(module('directives/employee-item.html'));


  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<employee-item></employee-item>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the employeeItem directive');
  }));
});
