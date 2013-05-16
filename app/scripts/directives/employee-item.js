'use strict';

angular.module('StaffApp.directives', [])
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
              var z = _(scope.departments).reject(function(el) {
                  return el.id === id;
              });
              scope.departments=z;
          }

          scope.edit = function(id) {
              $location.path('/edit/'+id);
          }
      }
    };
  });
