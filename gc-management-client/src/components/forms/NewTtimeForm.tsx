import React from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";

type formProps = {
  addTtime: any;
};

export interface newTtimeState {
  date: string;
  time: string;
}

class NewTtimeForm extends React.Component<formProps, newTtimeState> {
  state = {
    date: "",
    time: ""
  };

  handleChange = (name: string, e: any) => {
    this.setState({
      ...this.state,
      [name]: e.target.value
    });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.addTtime(`${this.state.date} ${this.state.time}`);
    this.setState({
      date: "",
      time: ""
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <FormGroup>
                <Label for="date">Date:</Label>
                <Input
                  type="text"
                  name="date"
                  id="teeTime date"
                  placeholder="Ex: 11/01/2019"
                  onChange={e => this.handleChange("date", e)}
                  value={this.state.date}
                />
              </FormGroup>
              <FormGroup>
                <Label for="time">Time:</Label>
                <Input
                  type="text"
                  name="time"
                  id="teeTime"
                  placeholder="Ex: 5:30 PM"
                  onChange={e => this.handleChange("time", e)}
                  value={this.state.time}
                />
              </FormGroup>
              <Button color="success">Create New Tee Time</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default NewTtimeForm;
