const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  hireDate: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
});

module.exports = Employee = mongoose.model("employee", EmployeeSchema);
