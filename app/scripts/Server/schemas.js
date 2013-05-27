var mongoose = require('mongoose');

module.exports = function Schemas() {
    this.schema = mongoose.Schema;
    this.EmployeeSchema = new this.schema({
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
            type: this.schema.ObjectId,
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
    this.EmployeeSchemaModel = mongoose.model('employees', this.EmployeeSchema);

    this.DepartmentSchema = new this.schema({
        'name': {
            type: String,
            required: true,
            trim: true,
            index: {
                unique: true
            }
        },
        'employees': [this.EmployeeSchema]
    });
    this.DepartmentSchemaModel = mongoose.model('departments', this.DepartmentSchema);

    mongoose.connect('mongodb://localhost:8120/staff');
};

