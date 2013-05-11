'use strict';

angular.module('StaffApp')
    .controller('StaffListController', function ($scope, DepartmentsModel, _) {
        $scope.departments = DepartmentsModel.getDepartments();
    });
