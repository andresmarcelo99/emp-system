import React from "react";
import "./App.css";

import Employees from "./components/Employees";
import AddEmp from "./components/AddEmp";

function App() {
  return (
    <div className="container mt-4">
      <h4 className="display-4 text-center mb-4">Employees System</h4>
      <AddEmp />
      <Employees />
    </div>
  );
}

export default App;
