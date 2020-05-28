import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addEmployee } from "../actions/empActions";
import ErrorAlert from "./ErrorAlert.js";
import EmpForm from "./EmpForm";

class AddEmpModal extends Component {
  state = {
    modal: false,
    name: "",
    salary: "",
    phoneNumber: "",
    email: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    const newEmp = {
      name: this.state.name,
      salary: this.state.salary,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
    };

    this.props.addEmployee(newEmp);
    this.toggle();
  };

  toggle = (e) => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div>
        {this.props.emp.alert && <ErrorAlert err={this.props.emp.errorType} />}
        <Button color="primary" onClick={this.toggle} style={{ margin: "1em" }}>
          {this.props.typeText}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Employee</ModalHeader>
          <ModalBody>
            <EmpForm
              change={this.onChange}
              onSubmit={this.onSubmit}
              typeClick={this.onSubmit}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emp: state.emp,
});

export default connect(mapStateToProps, { addEmployee })(AddEmpModal);
