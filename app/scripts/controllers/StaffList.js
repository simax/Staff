'use strict';

angular.module('StaffApp.controllers')
    .controller('StaffListController', function ($scope, $location, DepartmentsModel) {
        $scope.departments = DepartmentsModel.getDepartments();

        $scope.addEmployee = function(departmentName) {
            $location.path("/employees/add/" + departmentName);
        };
    });
