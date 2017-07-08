import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { WidgetContainer } from './ContentBoxWidget/WidgetContainer';

class App extends Component {
  render() {
    return (
      <Grid fluid className="app">
        <Row>
          <Col lg={2} md={1} />
          <Col lg={8} md={10} className="widget-container">
            <WidgetContainer />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;