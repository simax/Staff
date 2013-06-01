'use strict';

angular.module('StaffApp.directives', ['md5', 'ui-gravatar'])
  .directive('employeeItem', function ($location) {
    return {
      templateUrl: 'scripts/directives/employee-item-template.html',
      restrict: 'E',
      replace: true,
      scope: {
        employee: '='
      },
      link: function postLink(scope) {
          scope.alertRemove = function(_id){
              alert("Remove employee with id: " + _id);
              scope.departments = _(scope.departments).reject(function(el) {
                  return el.id === _id;
              });
          }

          scope.edit = function(departmentId, _id) {
              $location.path('employees/' + departmentId + '/edit/' + _id);
          }
      }
    };
  });
