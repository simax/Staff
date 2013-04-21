'use strict';

angular.module('StaffApp')
    .controller('StaffListController', function ($scope, DepartmentsModel) {
        $scope.departments =  DepartmentsModel.getDepartments();
    });
