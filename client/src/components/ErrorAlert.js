import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

export default function ErrorAlert(props) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <ul>
          {Object.keys(props.err).map((key) => (
            <li>
              {key} {": "} {props.err[key]}{" "}
            </li>
          ))}
        </ul>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
