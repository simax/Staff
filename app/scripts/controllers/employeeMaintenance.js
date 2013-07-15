'use strict';

angular.module('StaffApp.controllers')
    .controller('EmployeeMaintenanceController', function (Restangular, $scope, DepartmentsModel, $route, $location, employee) {

        $scope.departments = DepartmentsModel.getDepartments();

        var original = employee;
        $scope.employee = Restangular.copy(original);


        $scope.SetAsManager = function(employee){

            if (!employee._id) return ;

            DepartmentsModel.getDepartments().then(function (deps){
                debugger;
                _.each(deps, function (d) {
                    _.each(d.employees, function (e) {
                        e.IsManager = false;
                        debugger;
                        e.put();
                    });
                });

                DepartmentsModel.getEmployeeById(employee.departmentId, employee._id).then(function (emp){

                    emp.IsManager = true;
                       debugger;
                        emp.put();

                })
            })
        }

        $scope.save = function (employee) {

            if(employee._id) {

                DepartmentsModel.getEmployeeById(employee.departmentId, employee._id).then(function (emp){

                    emp.firstname = employee.firstname;
                    emp.lastname = employee.lastname;
                    emp.email = employee.email;

                    debugger;
                    emp.put();

                });
            }

            $location.path("/employees");
        }
    });