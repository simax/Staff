


module.exports = function DepartmentRoutes(schemas) {

    var Department = schemas.DepartmentSchemaModel;

    this.post = function(req, res) {
        var entity,
            _this = this;
        entity = new EmployeeSchemaModel;
        this.modelBind(entity, req);
        return entity.save(function(err) {
            return _this.save(entity, res, err);
        });
    };

    this.getall = function(req, res) {

        res.contentType('application/json');

        return Department.find().sort({
            'name': 'asc'
        }).exec(function(err, data) {
                if (err) {
                    res.send(err);
                }
                return res.send(data);
            });
    };

    this.get = function(req, res) {
        console.log("req.params.id: " + req.params.id);
        return Department.findById(req.params.id, function(err, entity) {
            return res.send(entity);
        });
    };

    this.getEmployee = function(req, res) {
        console.log("req.params.id: " + req.params.id);
        return Department.findById(req.params.id, function(err, entity) {
            return entity.findById(req.params.empId, function(err, entity) {
                return entity;
            });
        });
    };

    this.put = function(req, res) {
        var _this = this;
        return Department.findById(req.params.id, function(err, entity) {
            _this.modelBind(entity, req);
            return entity.save(function(err) {
                return _this.save(entity, res, err);
            });
        });
    };

    this["delete"] = function(req, res) {
        return Department.findById(req.params.id, function(err, entity) {
            entity.remove();
            return res.send(204);
        });
    };

    this.modelBind = function(entity, req) {
        return entity.name = req.body.name;
    };

    this.save = function(entity, res, err) {
        if (err) {
            console.log(err);
            if (err.code = 1101) {
                res.send("Already exists", 400);
                return;
            }
            return res.send("Unable to process request", 500);
        } else {
            return res.send(entity);
        }
    };
};

