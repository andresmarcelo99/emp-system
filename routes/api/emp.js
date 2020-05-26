const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Employee = require("../../models/Employee");
const validateEmpInput = require("../../validation/employee");

// @route GET api/emp/test
// @desc Test emp route
// @access public route
router.get("/test", (req, res) => res.json({ msg: "emp works" }));

// @route GET api/emps
// @desc Create new emp
// @access public route
router.post("/", (req, res) => {
  const { errors, isValid } = validateEmpInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Employee.findOne({
    email: req.body.email,
  }).then((emp) => {
    if (emp) {
      return res.status(400).json({ emp: "Employee already exists" });
    }
    const newEmp = new Employee({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      salary: req.body.salary,
    });
    newEmp
      .save()
      .then((emp) => res.json(emp))
      .catch((err) => res.status(404).json(err));
  });
});

// @route POST api/emp/edit/:emp_id
// @desc edit emp
// @access public
router.post("/edit/:emp_email", (req, res) => {
  const { errors, isValid } = validateEmpInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  //emp fields
  const empFields = {};
  if (req.body.name) empFields.name = req.body.name;
  if (req.body.phoneNumber) empFields.phoneNumber = req.body.phoneNumber;
  if (req.body.email) empFields.email = req.body.email;
  if (req.body.salary) empFields.salary = req.body.salary;

  Employee.findOne({ email: req.params.emp_email }).then((emp) => {
    if (emp) {
      //update
      Employee.findOneAndUpdate(
        { email: req.params.emp_email },
        { $set: empFields },
        { new: true }
      )
        .then((employee) => res.json(employee))
        .catch((err) => res.json(err));
    } else {
      res.status(404).json({ notFound: "Employee not found" });
    }
  });
});

// @route GET api/emps
// @desc Get all emps
// @access public route
router.get("/", (req, res) => {
  const errors = {};

  Employee.find()
    .then((employees) => {
      if (!employees) {
        errors.noEmployees = "There are no employees";
        return res.status(404).json(errors);
      }
      res.json(employees);
    })
    .catch((err) => res.status(400).json(err));
});

// @route GET  api/emps/:emp_id
// @desc Get employee by emp_id
// @access public
router.get("/id/:emp_id", (req, res) => {
  const errors = {};
  Employee.findOne({ employee: req.params.emp_id })
    .then((emp) => {
      if (!emp) {
        errors.noEmp = "No emp with that id";
        res.status(404).json(errors);
      }
      res.json(emp);
    })
    .catch((err) => res.status(400).json(err));
});

// @route GET  api/emps/:emp_email
// @desc Get employee by emp_email
// @access public
router.get("/email/:emp_email", (req, res) => {
  const errors = {};
  Employee.findOne({ email: req.params.emp_email })
    .then((emp) => {
      if (!emp) {
        errors.noEmp = "No emp with that email";
        res.status(404).json(errors);
      }
      res.json(emp);
    })
    .catch((err) => res.status(400).json(err));
});

// @route DELETE api/emp
// @desc delete emp
// @access public
router.delete("/:emp_id", (req, res) => {
  Employee.findOneAndRemove({ _id: req.params.emp_id })
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ notfound: "Employee not found" }));
});

module.exports = router;
