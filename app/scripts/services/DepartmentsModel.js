'use strict';

angular.module('StaffApp.services')
    .factory('DepartmentsModel', function(Restangular) {

        var departments = Restangular.all('department');

        var getDepartments = function() {
            return departments.getList();
        };

        var getEmployeeById = function(departmentId, empId) {
            return Restangular.one('department',departmentId).one('employees', empId).get();
        };

        return {
            getEmployeeById: getEmployeeById,
            getDepartments: getDepartments
        };
    });
