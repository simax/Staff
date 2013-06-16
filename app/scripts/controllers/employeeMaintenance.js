'use strict';

angular.module('StaffApp.controllers')
    .controller('EmployeeMaintenanceController', function ($scope, DepartmentsModel, $route, $location) {

        $scope.departments = DepartmentsModel.getDepartments();
        $scope.employee = DepartmentsModel.getEmployeeById($route.current.params.departmentId, $route.current.params.empId);

        $scope.save = function (employee) {
            if(employee.id){
                // Needs fixing, doesn't work
                var department = _.findWhere($scope.departments, { Name: departmentName});
                var emp = _.findWhere(department.employees, {id: employee.id})

                emp.firstname = employee.firstname;
                emp.lastname = employee.lastname;
                emp.email = employee.email;

            } else {
                // Add to array
                var departmentName = $route.departmentName;
                var department = _.findWhere($scope.departments, { name: departmentName});
                department.employees.push(employee);
            }
            $location.path("/employees");
        }
    });