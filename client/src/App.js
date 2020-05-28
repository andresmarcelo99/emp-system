import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Employees from "./components/Employees";
import AddEmp from "./components/AddEmp";
import ErrorAlert from "./components/ErrorAlert.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      alert: "",
      curr: "",
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
    axios
      .post("/api/emps", this.state)
      .then((res) => {
        console.log(res);
        this.setState({
          employees: [...this.state.employees, res.data],
          alert: "",
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        this.setState({
          alert: <ErrorAlert err={err.response.data} />,
        });
      });
    console.log(this.state);
  };

  onSubmitEdit = () => {
    console.log(this.state.curr);
    axios
      .post(`api/emps/edit/${this.state.curr}`, this.state)
      .then((res) => {
        console.log(res);
        this.setState({
          employees: [...this.state.employees],
          alert: "",
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        this.setState({
          alert: <ErrorAlert err={err.response.data} />,
        });
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

  editEmp = (_id) => {
    //  console.log(_id);
    this.setState({ curr: _id });
    console.log(this.state.curr);
  };

  render() {
    return (
      <div className="container mt-4">
        <h4 className="display-4 text-center mb-4">Employees System</h4>
        {this.state.alert}
        <AddEmp
          change={this.change}
          onSubmit={this.onSubmit}
          alert={this.state.alertShow}
          errorMsg={this.state.errorMsg}
        />
        <Employees
          emps={this.state.employees}
          deleteEmp={this.deleteEmp}
          editEmp={this.editEmp}
          change={this.change}
          onSubmitEdit={this.onSubmitEdit}
        />
      </div>
    );
  }
}
