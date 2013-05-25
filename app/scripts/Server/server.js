
require('express-namespace');

var basePath = '',
    express = require('express'),
    departmentRoutes = new (require('./route.departments'))(),
    employeeRoutes = new (require('./route.employees'))(),
    server = express();

    server.configure(function() {
//        server.register('html', {
//            compile: function(str, options) {
//                return function(locals) {
//                    return str;
//                };
//            }
//        });
        server.set('views', __dirname + '/app');
        server.set('view engine', 'html');
        server.set('view options', {
            layout: false
        });
        server.use(express.bodyParser());
        server.use(server.router);
        server.use(express.static(__dirname + '/public'));
    });


    server.namespace(basePath, function() {
        server.get('/', function(req, res, next) {
            return res.send('root path');
        });
        return server.namespace('/api', function() {

            server.get('/departments', departmentRoutes.getall);
            server.get('/departments/:id', departmentRoutes.get);
            server.post('/departments', departmentRoutes.post);
            server.put('/departments/:id', departmentRoutes.put);
            server["delete"]('/departments/:id', departmentRoutes["delete"]);

            server.get('/employees', employeeRoutes.getall);
            server.get('/employees/:id', employeeRoutes.get);
            server.post('/employees', employeeRoutes.post);
            server.put('/employees/:id', employeeRoutes.put);
            server["delete"]('/employees/:id', employeeRoutes["delete"]);
        });
    });

    server.listen(1234);

module.exports = server ;