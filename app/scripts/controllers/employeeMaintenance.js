'use strict';

angular.module('StaffApp.controllers')
    .controller('EmployeeMaintenanceController', function (Restangular, $scope, DepartmentsModel, $route, $location, employee) {

        $scope.departments = DepartmentsModel.getDepartments();

        var original = employee;
        $scope.employee = Restangular.copy(original);

        $scope.save = function (employee) {
            debugger;
            if(employee._id){
                $scope.employee.put();
            }
            $location.path("/employees");
        }
    });