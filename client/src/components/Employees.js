import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default class Employees extends Component {
  render() {
    return (
      <div>
        <h2 style={{ margin: "1em" }}>Employees</h2>
        <ul>
          {this.props.emps.map((emp) => (
            <li key={emp._id}>
              <span style={{ fontWeight: "800" }}>Name:</span>{" "}
              <span style={{ marginRight: "1em" }}>{emp.name}</span>
              <span style={{ fontWeight: "800" }}>Hired on:</span>{" "}
              <span style={{ marginRight: "1em" }}>
                {emp.hireDate.substring(0, 10)}
              </span>
              <span style={{ margin: "1em" }}>
                <Button
                  size="sm"
                  style={{
                    margin: "0.5em",
                    background: "grey",
                    border: "none",
                  }}
                >
                  edit
                </Button>
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
