import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./App.css";

import Employees from "./components/Employees";
import AddEmp from "./components/AddEmp";

export default class App extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    fetch("/api/emps")
      .then((res) => res.json())
      .then((employees) =>
        this.setState({ employees }, () =>
          console.log("Emps fetched..", employees)
        )
      );
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/emps", this.state)
      .then((res) => {
        console.log(res);
        const newEmp = {};
        newEmp.name = res.data.name;
        newEmp.hireDate = res.data.hireDate;
        this.setState({ employees: [...this.state.employees, res.data] });
      })
      .catch((err) => console.log(err));
    console.log(this.state);
  };

  deleteEmp = (_id) => {
    console.log(_id);
    axios
      .delete(`/api/emps/${_id}`)
      .then(() => {
        this.setState({
          employees: [...this.state.employees.filter((emp) => emp._id !== _id)],
        });
        console.log({ success: "true" });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container mt-4">
        <h4 className="display-4 text-center mb-4">Employees System</h4>
        <AddEmp change={this.change} onSubmit={this.onSubmit} />
        <Employees emps={this.state.employees} deleteEmp={this.deleteEmp} />
      </div>
    );
  }
}
