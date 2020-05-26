const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateEmpInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.salary = !isEmpty(data.salary) ? data.salary : "";

  if (!Validator.isLength(data.name, { min: 2, max: 44 })) {
    errors.name = "Name must be between 2 and 44 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Phone number field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.salary)) {
    errors.salary = "Salary field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
