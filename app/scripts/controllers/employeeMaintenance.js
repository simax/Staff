'use strict';

angular.module('StaffApp.controllers')
    .controller('EmployeeMaintenanceController', function (Restangular, $scope, DepartmentsModel, $route, $location) {

        $scope.departments = DepartmentsModel.getDepartments();
        $scope.employee = $route.current.locals.employee;


        $scope.save = function (employee) {
            debugger;
            if(employee._id){
                employee.put();

            } else {
                var dep = Restangular.one('department', employee.departmentId).getList('employees');
                dep.post(employee);
            }
            $location.path("/employees");
        }
    });