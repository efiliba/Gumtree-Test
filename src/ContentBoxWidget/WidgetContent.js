import React from 'react';
import './WidgetContent.css';
import { Grid, Row, Col } from 'react-bootstrap';

// Display the thumbnail (if given) and the description
//   description set using dangerouslySetInnerHTML to render included markup
export const WidgetContent = props => {
  const description = {__html: props.description};

  // Check for any potential security threats in the passed descriptions
  if (description.__html.indexOf('<script') > 0) {
    throw Error("Unsafe script tag in description");
  }

  return (
    <Grid fluid className="widget-content-container">
      <Row>
        {props.thumbnail &&
          <Col sm={4} xs={12} className="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/img/${props.thumbnail}`} alt={props.thumbnail} />
          </Col>
        }
        <Col sm={props.thumbnail ? 8 : 12} className="description">
          <div dangerouslySetInnerHTML={description} />
        </Col>
      </Row>
    </Grid>
  );
};