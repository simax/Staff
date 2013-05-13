'use strict';

angular.module('StaffApp')
  .directive('employeeItem', function () {
    return {
      templateUrl: 'scripts/directives/employee-item-template.html',
      restrict: 'E',
      replace: true,
      scope: {
        employee: '='
      },
      link: function postLink(scope, element, attrs) {
//        element.text('this is the employeeItem directive');
          scope.alertRemove = function(id){
              alert("Remove employee with id: " + id);
              var z = _(scope.departments).reject(function(el) {
                  return el.id === id;
              });
              scope.departments=z;
          }
      }
    };
  });
