import React from "react";
import iba from "../assets/images/iba-logo.png";
import { Container } from "react-bootstrap";
function Footer() {
  return (
    <div className="bg-dark text-white p-4">
      <Container className="d-flex">
        <img src={iba} alt="IBA" />
        <p>All copy rights are reserved by Sukkur IBA University</p>
      </Container>
    </div>
  );
}

export default Footer;
