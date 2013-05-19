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
          scope.alertRemove = function(id){
              alert("Remove employee with id: " + id);
              scope.departments = _(scope.departments).reject(function(el) {
                  return el.id === id;
              });
          }

          scope.edit = function(id) {
              $location.path('employees/edit/' + id);
          }
      }
    };
  });
