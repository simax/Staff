'use strict';

angular.module('StaffApp.controllers')
    .controller('EmployeeMaintenanceController', function ($scope, DepartmentsModel) {
        $scope.departments = DepartmentsModel.getDepartments();

    });