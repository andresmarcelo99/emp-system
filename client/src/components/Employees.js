import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Employees extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    fetch("/api/emps")
      .then((res) => res.json())
      .then((employees) =>
        this.setState({ employees }, () =>
          console.log("Emps fetched..", employees)
        )
      );
  }

  render() {
    return (
      <div>
        <h2 style={{ margin: "1em" }}>Employees</h2>
        <ul>
          {this.state.employees.map((emp) => (
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
                <Button variant="danger" size="sm" style={{ margin: "0.5em" }}>
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
