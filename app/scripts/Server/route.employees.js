
module.exports = function EmployeeRoutes(schemas) {

    var Model = schemas.EmployeeSchemaModel;

    this.put = function(req, res) {
        var _this = this;
        return this.Model.findOne({
            'employees._id': req.params.id
        }, function(err, department) {
            var entity;
            if (err) {
                res.send(err);
            }
            if (department == null) {
                res.send(404);
            }
            entity = department.employees.id(req.params.id);
            _this.modelBind(entity, req);
            return department.save(function(err) {
                if (err) {
                    console.log(err);
                }
                if (err) {
                    res.send(err);
                }
                return res.send(200);
            });
        });
    };

    this.post = function(req, res) {
        var _this = this;
        return this.Model.findOne({
            '_id': req.body.departmentId
        }, function(err, department) {
            var employee;
            if (err) {
                res.send(err);
            }
            if (department == null) {
                res.send(404);
            }
            employee = new this.schemas.EmployeeSchemaModel();
            _this.modelBind(employee, req);
            department.employees.addToSet(employee);
            return department.save(function(err) {
                return _this.respond(employee, res, err);
            });
        });
    };

    this.getall = function(req, res) {
        res.contentType('application/json');
        return Model.find().exec(function(err, data) {
            if (err) {
                res.send(err);
            }
            return res.send(data);
        });
    };

    this.get = function(req, res) {
        return this.Model.findById(req.params.id).run(function(err, entity) {
            return res.send(entity);
        });
    };

    this["delete"] = function(req, res) {
        return this.Model.findOne({
            'employees._id': req.params.id
        }, function(err, entity) {
            entity.employees.id(req.params.id).remove();
            console.log(entity);
            return entity.save(function(err) {
                if (err) {
                    res.send(err);
                }
                return res.send(200);
            });
        });
    };

    this.modelBind = function(entity, req) {
        entity.firstname = req.body.firstname;
        entity.lastname = req.body.lastname;
        entity.email = req.body.email;
        entity.enddate = req.body.enddate;
        entity.active = req.body.active;
        return entity.departmentId = req.body.departmentId;
    };

    this.respond = function(entity, res, err) {
        if (err) {
            console.log(err);
            if (err.code = 1101) {
                res.send("Unable to save", 400);
                return;
            }
            return res.send("Unable to process request", 500);
        } else {
            return res.send(entity);
        }
    };

};

