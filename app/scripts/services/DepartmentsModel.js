'use strict';

angular.module('StaffApp.services')
    .factory('DepartmentsModel', function($resource) {

        var departments = $resource('/api/departments/:id', '{id:@_id}');

        var getDepartments = function() {
            return departments.query();
        };

        var getEmployeeById = function(departmentId, empId) {
            empId = parseInt(empId);
            var employee = undefined;
            var departments = this.getDepartments();
            _.each(departments, function(dep){
                if(!employee){
                    employee = _.find(dep.employees, function(emp) { return emp.id === empId });
                }
            });
            return employee;
        };

        return {
            getEmployeeById: getEmployeeById,
            getDepartments: getDepartments
        };
    });
