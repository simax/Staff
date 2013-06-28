var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var EmployeeSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true,
        validate: /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\b/
    },
    departmentId: {
        type: objectId,
        trim: true,
        required: true
    },
    enddate: {
        type: String,
        trim: true
    },
    active: {
        type: Boolean,
        "default": true
    }
});

var DepartmentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: {
            unique: true
        }
    },
    employees: [EmployeeSchema]
});

//module.exports.employee =  mongoose.model('employee', EmployeeSchema);
module.exports.department  = mongoose.model('department', DepartmentSchema);

