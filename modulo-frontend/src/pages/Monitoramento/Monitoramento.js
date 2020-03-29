import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';

function Monitoramento() {
  return (
    <Container>
      <Row>
      <Link to="/login">Ir para a página sobre \o/</Link>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}

export default Monitoramento;
