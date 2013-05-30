
require('express-namespace');

var basePath = '',
    express = require('express'),
    path = require('path'),
    schemas = new (require("./Server/schemas"))();
    departmentRoutes = new (require('./Server/route.departments.js'))(schemas),
    employeeRoutes = new (require('./Server/route.employees.js'))(schemas),
    server = express();

    server.configure(function() {
//        server.register('html', {
//            compile: function(str, options) {
//                return function(locals) {
//                    return str;
//                };
//            }
//        });
//        server.set('views', __dirname + '/app');
//        server.set('view engine', 'html');
//        server.set('view options', {
//            layout: false
//        });
        server.use(express.bodyParser());
        server.use('/app', express.static('app'));
        server.use(server.router);
        server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

//    server.get('/app', function(req, res) {
//
//        var indexFile = path.join(__dirname, '../index.html');
//        console.log("Path: " + indexFile);
//        res.sendfile(indexFile);
//    });

    server.namespace(basePath, function() {


        return server.namespace('/api', function() {

            server.get('/departments', departmentRoutes.getall);
            server.get('/departments/:id', departmentRoutes.get);
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