
var express = require('express'),
    mers = require('mers');
    require('./Schemas/DataSchemas.js');

    process.env.NODE_ENV = 'development';

    var server = express();

    server.configure(function() {

        server.use(express.bodyParser());
        server.use('/app', express.static('app'));

        server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

        server.use('/api', mers({ uri:'mongodb://localhost:8120/staff' }).rest());
    });

    server.configure('development', function(){
        server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

    server.configure('production', function(){
        server.use(express.errorHandler());
    });

    server.listen(3000);
