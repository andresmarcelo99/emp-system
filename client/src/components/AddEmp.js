import React, { Component } from "react";
import {
  Button,
  Card,
  Accordion,
  Form,
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
        <Accordion defaultActiveKey="">
          <Card style={{ border: "none" }}>
            <Card.Header style={{ background: "transparent" }}>
              <this.CustomToggle as={Button} variant="link" eventKey="0">
                Add new employee!
              </this.CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Enter employee name"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group controlId="formBasicSalary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="text" placeholder="Enter salary" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter phone number"
                    />
                  </Form.Group>
                  <Button variant="dark" type="submit" size="sm">
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
