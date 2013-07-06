'use strict';

angular.module('StaffApp.controllers')
    .controller('EmployeeAddController', function (Restangular, $scope, DepartmentsModel, $route, $location) {

        $scope.departments = DepartmentsModel.getDepartments();

        $scope.save = function (employee) {
            debugger ;

//            var employees = DepartmentsModel.getDepartmentById('505a10d0caa74a580d000002').all('employees');
            var employees = Restangular.one('department','505a10d0caa74a580d000002').all('employees');

            var newEmployee = {
                firstname:  employee.firstname,
                lastname:  employee.lastname,
                email: employee.email
            };

            employees.post(newEmployee);

        }
    });