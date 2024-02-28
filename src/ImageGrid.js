import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ImageGrid() {
  return (
    <Container>
      <Row>
        <Col>
          <img src="image1.jpg" alt="Image 1" />
        </Col>
        <Col>
          <img src="image2.jpg" alt="Image 2" />
        </Col>
        <Col>
          <img src="image3.jpg" alt="Image 3" />
        </Col>
      </Row>
    </Container>
  );
}

export default ImageGrid;