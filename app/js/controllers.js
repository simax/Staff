'use strict';

controllers.controller('StaffListController', function ($scope) {
    $scope.myData = 'Simon';
    $scope.departments = [
        {'name' : 'Development',
            'employees' : [
                {'firstname' : 'Dan', 'lastname' : 'Ormisher', 'email' : 'dan.ormisher@ekmsystems.co.uk'},
                {'firstname' : 'Nick', 'lastname' : 'Stansfield', 'email' : 'nick.stanfield@ekmsystems.co.uk'},
                {'firstname' : 'Simon', 'lastname' : 'Lomax', 'email' : 'simon.lomax@ekmsystems.co.uk'}
            ]},
        {'name' : 'Design',
            'employees' : [
                {'firstname' : 'David', 'lastname' : 'Sharpe', 'email' : 'david.sharpe@ekmsystems.co.uk'}]},
        {'name' : 'Customer Services',
            'employees' : [
                {'firstname' : 'Matthew', 'lastname' : 'Allingham', 'email' : 'matthew.allingham@ekmsystems.co.uk'}]},
        {'name' : 'Sales'}
    ];
});

