
require('express-namespace');

process.env.NODE_ENV = 'development';

var basePath = '',
    express = require('express'),
    path = require('path');

var schemas = new (require('./routes/schemas.js'))();

var departmentRoutes = new (require('./routes/route.departments'))(schemas);
var employeeRoutes = new (require('./routes/route.employees.js'))(schemas);

var server = express();

    server.configure(function() {

        server.use(express.bodyParser());
        server.use('/app', express.static('app'));

        server.use(server.router);
        server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

    server.configure('development', function(){
        server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

    server.configure('production', function(){
        server.use(express.errorHandler());
    });

    server.namespace(basePath, function() {


        return server.namespace('/api', function() {

            server.get('/departments', departmentRoutes.getall);
            server.get('/departments/:id', departmentRoutes.get);
            server.get('/departments/:id/employees/empId', departmentRoutes.getEmployee);
            server.post('/departments', departmentRoutes.post);
            server.put('/departments/:id', departmentRoutes.put);
            server["delete"]('/departments/:id', departmentRoutes["delete"]);

//            server.get('/employees', employeeRoutes.getall);
//            server.get('/employees/:id', employeeRoutes.get);
//            server.post('/employees', employeeRoutes.post);
//            server.put('/employees/:id', employeeRoutes.put);
//            server["delete"]('/employees/:id', employeeRoutes["delete"]);
        });
    });

    server.listen(8000);

module.exports = server ;