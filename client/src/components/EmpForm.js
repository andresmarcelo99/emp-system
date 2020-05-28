import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class EmpForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.submitHandler}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name="name"
            type="name"
            placeholder="Enter employee name"
            onChange={(e) => this.props.change(e)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={(e) => this.props.change(e)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicSalary">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            name="salary"
            type="text"
            placeholder="Enter salary"
            onChange={(e) => this.props.change(e)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phoneNumber"
            type="text"
            placeholder="Enter phone number"
            onChange={(e) => this.props.change(e)}
          />
        </Form.Group>
        <Button variant="dark" size="sm" onClick={this.props.typeClick}>
          Submit
        </Button>
      </Form>
    );
  }
}
export default EmpForm;
