import React from "react";
import { Form, FormGroup, Label, Input, Row, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

type formProps = {
  customers: any[];
};

export interface updateState {
  customers: any[];
}

class UpdateTtimeForm extends React.Component<formProps, updateState> {
  state = {
    customers: []
  };

  render() {
    let { customers } = this.props;
    return (
      <Form>
        {customers && (
          <Row>
            <FormGroup>
              <Label for="customer1">Customer:</Label>
              <Input
                type="text"
                name="customer1"
                placeholder={customers[0] ? customers[0].name : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="customer1">Customer:</Label>
              <Input
                type="text"
                name="customer1"
                placeholder={customers[1] ? customers[1].name : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="customer1">Customer:</Label>
              <Input
                type="text"
                name="customer1"
                placeholder={customers[2] ? customers[2].name : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="customer1">Customer:</Label>
              <Input
                type="text"
                name="customer1"
                placeholder={customers[3] ? customers[3].name : ""}
              />
            </FormGroup>
          </Row>
        )}
        <Button color="success">
          <NavLink to="/">Done</NavLink>
        </Button>
      </Form>
    );
  }
}

export default UpdateTtimeForm;
