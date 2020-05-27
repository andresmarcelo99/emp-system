import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Employees from "./components/Employees";
import AddEmp from "./components/AddEmp";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      errorMsg: "",
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
        newEmp.salary = res.data.salary;
        this.setState({ employees: [...this.state.employees, res.data] });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errorMsg: err.message });
      });
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
