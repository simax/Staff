'use strict';

angular.module('StaffApp')
    .controller('EmployeeMaintenanceController', function ($scope, DepartmentsModel) {
        $scope.departments = DepartmentsModel.getDepartments();

    });