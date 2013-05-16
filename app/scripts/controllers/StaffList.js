'use strict';

angular.module('StaffApp.controllers')
    .controller('StaffListController', function ($scope, DepartmentsModel) {
        $scope.departments = DepartmentsModel.getDepartments();
    });
