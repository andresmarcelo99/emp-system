import React, { Component } from "react";
import { Button, Popover, OverlayTrigger, Form } from "react-bootstrap";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import EmpForm from "./EmpForm";
import {
  getEmployees,
  delEmployee,
  setCurr,
  editEmployee,
} from "../actions/empActions";

class Employees extends Component {
  state = {
    name: "",
    salary: "",
    phoneNumber: "",
    email: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    const editEmp = {
      name: this.state.name,
      salary: this.state.salary,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
    };

    this.props.editEmployee(editEmp, this.props.emp.curr);
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.email) {
      this.setState({
        name: nextProps.name,
        salary: nextProps.salary,
        phoneNumber: nextProps.phoneNumber,
        email: nextProps.email,
      });
    }
  }

  popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Edit Employee</Popover.Title>
      <Popover.Content>
        <EmpForm
          change={this.onChange}
          onSubmit={this.onSubmit}
          typeClick={this.onSubmit}
        />
      </Popover.Content>
    </Popover>
  );

  componentDidMount() {
    this.props.getEmployees();
  }

  setCurrent = (email) => {
    this.props.setCurr(email);
  };

  onDeleteClick = (_id) => {
    this.props.delEmployee(_id);
  };

  render() {
    const { employees } = this.props.emp;
    return (
      <div>
        <h2 style={{ margin: "1em" }}>Employees</h2>
        <ul>
          {employees.map((emp) => (
            <li key={emp._id}>
              <span style={{ fontWeight: "800" }}>Name:</span>{" "}
              <span style={{ marginRight: "1em" }}>{emp.name}</span>
              <span style={{ fontWeight: "800" }}>Salary:</span>{" "}
              <span style={{ marginRight: "1em" }}>{emp.salary}</span>
              <span style={{ fontWeight: "800" }}>Hired on:</span>{" "}
              <span style={{ marginRight: "1em" }}>
                {emp.hireDate.substring(0, 10)}
              </span>
              <span style={{ margin: "1em" }}>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={this.popover}
                >
                  <Button
                    size="sm"
                    onClick={this.setCurrent.bind(this, emp.email)}
                    style={{
                      margin: "0.5em",
                      background: "grey",
                      border: "none",
                    }}
                  >
                    edit
                  </Button>
                </OverlayTrigger>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={this.onDeleteClick.bind(this, emp._id)}
                  style={{ margin: "0.5em" }}
                >
                  delete
                </Button>
              </span>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Employees.propTypes = {
  emps: PropTypes.array.isRequired,
  getEmployees: PropTypes.func.isRequired,
  emp: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  emp: state.emp,
});

export default connect(mapStateToProps, {
  getEmployees,
  delEmployee,
  setCurr,
  editEmployee,
})(Employees);
