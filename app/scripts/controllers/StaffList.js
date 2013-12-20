'use strict';

angular.module('StaffApp.controllers')
    .controller('StaffListController', ["$scope", "$location", "DepartmentsModel", function ($scope, $location, DepartmentsModel) {

        $scope.init = function() {

            $scope.oneAtATime = true;
            $scope.departments = DepartmentsModel.getDepartments();
        }

        $scope.addEmployee = function(departmentName) {
            $location.path("/employees/add/" + departmentName);
        };

        $scope.init();
    }]);
