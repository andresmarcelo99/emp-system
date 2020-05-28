import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";

import Employees from "./components/Employees";
import store from "./store";
import AddEmpModal from "./components/AddEmpModal";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container mt-4">
          <h4 className="display-4 text-center mb-4">Employees System</h4>
          <AddEmpModal typeText={"Add Employee"} />
          <Employees />
        </div>
      </Provider>
    );
  }
}
