import React, { Component } from "react";
import { Button, Card, Accordion, useAccordionToggle } from "react-bootstrap";

import EmpForm from "./EmpForm";

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
                <EmpForm
                  change={this.props.change}
                  onSubmit={this.props.onSubmit}
                  typeClick={(e) => this.props.onSubmit(e)}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
