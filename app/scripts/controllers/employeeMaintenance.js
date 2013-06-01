'use strict';

angular.module('StaffApp.controllers')
    .controller('EmployeeMaintenanceController', function ($scope, DepartmentsModel, $routeParams, $location) {
        $scope.departments = DepartmentsModel.getDepartments();
        $scope.employee = DepartmentsModel.getEmployeeById($routeParams.departmentId, $routeParams.empId);
        $scope.save = function (employee) {
            if(employee.id){
                // Needs fixing, doen't work
                var department = _.findWhere($scope.departments, { Name: departmentName});
                var emp = _.findWhere(department.employees, {id: employee.id})

                emp.firstname = employee.firstname;
                emp.lastname = employee.lastname;
                emp.email = employee.email;

            } else {
                // Add to array
                var departmentName = $routeParams.departmentName;
                var department = _.findWhere($scope.departments, { name: departmentName});
                department.employees.push(employee);
            }
            $location.path("/employees");
        }
    });