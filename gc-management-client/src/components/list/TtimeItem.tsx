import React from "react";
import { useState } from "react";
import {
  Collapse,
  CardBody,
  Card,
  ListGroup,
  ListGroupItem,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Button
} from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import UpdateTtimeForm from "../forms/UpdateTtimeForm";

type ItemProps = {
  key: number;
  ttime: any;
};

const TtimeItem = (props: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let { customers } = props.ttime;
  const listOfCustomers: any = customers.map((customer: any, i: number) => {
    return (
      <CardSubtitle key={i} className="m-2">
        {customer.name}
      </CardSubtitle>
    );
  });

  return (
    <Router>
      <ListGroup>
        <ListGroupItem
          color="info"
          onClick={toggle}
          style={{ marginBottom: "1rem" }}
        >
          {props.ttime.time}
        </ListGroupItem>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              <Row>
                <Col>
                  <CardTitle>Attendees:</CardTitle>
                </Col>
                <Col className="text-right">
                  <Button color="warning">
                    <NavLink to="/updatettime">Update</NavLink>
                  </Button>
                </Col>
              </Row>
              <Row className="m-3">
                <Switch>
                  <Route exact path="/" render={props => listOfCustomers} />
                  <Route
                    path="/updatettime"
                    render={props => <UpdateTtimeForm customers={customers} />}
                  />
                </Switch>
              </Row>
            </CardBody>
          </Card>
        </Collapse>
      </ListGroup>
    </Router>
  );
};

export default TtimeItem;
