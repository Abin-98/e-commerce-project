import React from "react";
import Header from "../../components/Header";
import classes from "./HomePage.module.css";
import { Button, Container, Table, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
  const content = (
    <>
      <Button size="lg" variant="outline-light">
        Get our Latest Album
      </Button>
      <FontAwesomeIcon icon="fa-regular fa-circle-play" />
    </>
  );

  const btn = <Button variant="primary">BUY TICKETS</Button>;

  return (
    <>
      <Header extra={content} />
      <Container>
        <h2 className={classes.title}>Tours</h2>
        <Row>
          <Col sm={9} className={classes.colm}>
            <Table responsive="sm" striped hover>
              <thead>
              <tr>
                  <th>DATES</th>
                  <th>STATE</th>
                  <th>LOCATION</th>
                  <th>REGISTER HERE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>JUL16</th>
                  <th>DETROIT, MI</th>
                  <th>DTE ENERGY MUSIC THEATRE</th>
                  <th>{btn}</th>
                </tr>
                <tr>
                  <th>JUL19</th>
                  <th>TORONTO,ON</th>
                  <th>BUDWEISER STAGE</th>
                  <th>{btn}</th>
                </tr>
                <tr>
                  <th>JUL22</th>
                  <th>BRISTOW, VA</th>
                  <th>JIGGY LUBE LIVE</th>
                  <th>{btn}</th>
                </tr>
                <tr>
                  <th>JUL29</th>
                  <th>PHOENIX, AZ</th>
                  <th>AK-CHIN PAVILION</th>
                  <th>{btn}</th>
                </tr>
                <tr>
                  <th>AUG 2</th>
                  <th>LAS VEGAS, NV</th>
                  <th>T-MOBILE ARENA</th>
                  <th>{btn}</th>
                </tr>
                <tr>
                  <th>AUG 7</th>
                  <th>CONCORD, CA</th>
                  <th>CONCORD PAVILION</th>
                  <th>{btn}</th>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
