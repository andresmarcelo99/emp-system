import React, { Component } from "react";
import { Button, Popover, OverlayTrigger, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import EmpForm from "./EmpForm";

export default class Employees extends Component {
  popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Edit Employee</Popover.Title>
      <Popover.Content>
        <EmpForm
          change={this.props.change}
          onSubmit={this.props.onSubmitEdit}
          typeClick={this.props.onSubmitEdit}
        />
      </Popover.Content>
    </Popover>
  );

  render() {
    return (
      <div>
        <h2 style={{ margin: "1em" }}>Employees</h2>
        <ul>
          {this.props.emps.map((emp) => (
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
                    onClick={this.props.editEmp.bind(this, emp.email)}
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
                  onClick={this.props.deleteEmp.bind(this, emp._id)}
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
};
