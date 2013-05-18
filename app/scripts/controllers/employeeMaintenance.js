'use strict';

angular.module('StaffApp.controllers')
    .controller('EmployeeMaintenanceController', function ($scope, DepartmentsModel, $routeParams) {
        $scope.employee = DepartmentsModel.getEmployeeById($routeParams.empId);
    });