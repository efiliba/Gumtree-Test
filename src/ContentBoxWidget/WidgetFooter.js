import React from 'react';
import './WidgetFooter.css';
import { Row, Col } from 'react-bootstrap';

// Display the previous and next links propagating navigation requests 
export const WidgetFooter = props => 
  <Row className="widget-footer-container">
    <Col xs={12}>
      <hr />
      <span className="prev-container" onClick={props.onPrevClicked}> 
        <i className="icon fa fa-caret-left" />
        <span className="text">{props.prevText}</span>
      </span>
      <span className="next-container" onClick={props.onNextClicked}> 
        <span className="text">{props.nextText}</span>
        <i className="icon fa fa-caret-right" />
      </span>
    </Col>
  </Row>;