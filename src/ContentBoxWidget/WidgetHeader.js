import React from 'react';
import './WidgetHeader.css';
import { Row, Col } from 'react-bootstrap';

// Display the header row propagating changes in the collapsed status 
export const WidgetHeader = props => 
  <Row className="widget-header-container">
    <Col xs={12}>
      <i className="title-icon fa fa-file" />
      <span className="title">{props.title}</span>
      <i
        className={`collapse-icon fa fa-caret-${props.isCollapsed ? 'down' : 'up'}`}
        onClick={props.onCollapseToggle}
      />
    </Col>
  </Row>;