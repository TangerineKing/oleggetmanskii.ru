import React from "react"; 
import { useState, useEffect } from "react";
import {Col, Container, Row } from "react-bootstrap";
import Cardm  from "../Components/cardm";
import CardS from "../Components/cards"
import Cardb from "../Components/cardb"
import Cardf from "../Components/cardf"
import Cardt from "../Components/cardt"
import Transitions from "../Components/Transitions";
import { withRouter } from 'react-router';

function Portfolio() {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  
  useEffect(() => {
      const handleScroll = () => {
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
              setIsScrolledToBottom(true);
          } else {
              setIsScrolledToBottom(false);
          }
      };
  
      document.addEventListener("scroll", handleScroll);
  
      return () => {
          document.removeEventListener("scroll", handleScroll);
      };
  });
  
  if (isScrolledToBottom) {
      // Здесь ваш код для перехода на другую страницу
      window.location.href = "/Contacts";
  }

return (
  <div className="bg-port">
  <Transitions>
<div className="wrapper-text">
  <h2>Dig Into <span className="color-text">My Works</span></h2>
  </div>
    <Container className="container-port">
      <Row className="pt-5">
        <Col>
      <Cardm/>
      </Col>
      <Col>
      <CardS/>
      </Col>
      <Col>
      <Cardb/>
      </Col>
      </Row>
      <Row className="pt-2">
        <Col>
        <Cardf/>
      </Col>
      <Col>
      <Cardt/>
      </Col>
      <Col>
      </Col>
      </Row>
    </Container>
    </Transitions>
</div>
);
}

export default withRouter(Portfolio);