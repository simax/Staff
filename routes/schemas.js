var mongoose = require('mongoose'),
    schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

EmployeeSchema = new schema({
    'firstname': {
        type: String,
        required: true,
        trim: true
    },
    'lastname': {
        type: String,
        required: true,
        trim: true
    },
    'email': {
        type: String,
        required: true,
        trim: true,
        index: true,
        validate: /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\b/
    },
    'departmentId': {
        type: objectId,
        trim: true,
        required: true
    },
    'enddate': {
        type: String,
        trim: true
    },
    'active': {
        type: Boolean,
        "default": true
    }
});

DepartmentSchema = new schema({
    'name': {
        type: String,
        required: true,
        trim: true,
        index: {
            unique: true
        }
    },
    'employees': [EmployeeSchema]
});

module.exports.department = DepartmentSchemaModel = mongoose.model('departments', DepartmentSchema);
module.exports.employee = EmployeeSchemaModel = mongoose.model('employees', EmployeeSchema);

