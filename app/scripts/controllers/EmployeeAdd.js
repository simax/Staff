'use strict';

angular.module('StaffApp.controllers')
    .controller('EmployeeAddController', function (Restangular, $scope, DepartmentsModel, $route, $location) {

        $scope.departments = DepartmentsModel.getDepartments();

        $scope.save = function () {
            debugger;
//            Restangular.one('department', $scope.employee.departmentId).getList('employees').post($scope.employee).then(function (employee){
            Restangular.all("department").getList().then(function (deps) {
                var first = deps[0];
                first.post('employees', $scope.employee).then(function (employee){
                    $location.path("/employees");
                });
            });

//            Restangular.one('department', '505a10d0caa74a580d000002').get().then(function (dep){
//                dep.post('employees', $scope.employee).then(function (employee){
//                    $location.path("/employees");
//                });
//
//            })
//            Restangular.all('department').post({name: 'This is a new department'}).then(function (){
//                $location.path("/employees");
//            });
        }
    });