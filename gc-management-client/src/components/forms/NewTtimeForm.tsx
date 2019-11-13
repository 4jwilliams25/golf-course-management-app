import React from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

class NewTtimeForm extends React.Component {
  state = {
    NumberOfCustomers: 1 - 4
  };

  render() {
    return (
      <div>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label for="date">Date:</Label>
                <Input
                  type="text"
                  name="date"
                  id="teeTime date"
                  placeholder="Ex: 11/01/2019"
                />
              </FormGroup>
              <FormGroup>
                <Label for="time">Time:</Label>
                <Input
                  type="text"
                  name="time"
                  id="teeTime"
                  placeholder="Ex: 5:30 PM"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="customer">Customer 1:</Label>
                <Input type="text" name="customer" />
              </FormGroup>
              <FormGroup>
                <Label for="customer">Customer 2:</Label>
                <Input type="text" name="customer" />
              </FormGroup>
              <FormGroup>
                <Label for="customer">Customer 3:</Label>
                <Input type="text" name="customer" />
              </FormGroup>
              <FormGroup>
                <Label for="customer">Customer 4:</Label>
                <Input type="text" name="customer" />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default NewTtimeForm;
