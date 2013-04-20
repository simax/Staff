'use strict';

angular.module('StaffApp')
    .factory('DepartmentsModel', function() {
        var getDepartments = function() {
            return [
                {'name' : 'Development',
                    'employees' : [
                        {'firstname' : 'Dan', 'lastname' : 'Ormisher', 'email' : 'danielormisher@ekmsystems.co.uk'},
                        {'firstname' : 'Nick', 'lastname' : 'Stansfield', 'email' : 'nickstansfield@ekmsystems.co.uk'},
                        {'firstname' : 'Simon', 'lastname' : 'Lomax', 'email' : 'simonlomax@ekmsystems.co.uk'}
                    ]},
                {'name' : 'Design',
                    'employees' : [
                        {'firstname' : 'David', 'lastname' : 'Sharpe', 'email' : 'davidsharpe@ekmsystems.co.uk'}]},
                {'name' : 'Customer Services',
                    'employees' : [
                        {'firstname' : 'Matthew', 'lastname' : 'Allingham', 'email' : 'matthewallingham@ekmsystems.co.uk'}]},
                {'name' : 'Sales'}
            ];
        };

        return {
            getDepartments: getDepartments
        };
    });
