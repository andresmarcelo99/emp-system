import React, { Component } from "react";
import {
  Button,
  Card,
  Accordion,
  Form,
  Alert,
  useAccordionToggle,
} from "react-bootstrap";

export default class AddEmp extends Component {
  CustomToggle({ children, eventKey }) {
    const customOnClick = useAccordionToggle(eventKey, () =>
      console.log("clicked")
    );
    return (
      <Button type="button" size="sm" onClick={customOnClick}>
        {children}
      </Button>
    );
  }

  render() {
    return (
      <div>
        <p>{this.props.alertShow}</p>
        <Accordion defaultActiveKey="">
          <Card style={{ border: "none" }}>
            <Card.Header style={{ background: "transparent" }}>
              <this.CustomToggle as={Button} variant="link" eventKey="0">
                Add employee
              </this.CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
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
                  <Button
                    variant="dark"
                    type="submit"
                    size="sm"
                    onClick={(e) => this.props.onSubmit(e)}
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
