import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Logo from "../assets/images/logo-home.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <Container>
      <Nav className="me-auto justify-content-between p-4">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <Nav className="me-auto">
            <Nav.Link style={{ color: "black" }} as={Link} to="/" href="#about">
              About
            </Nav.Link>
            <Nav.Link style={{ color: "black" }} as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            <Nav.Link style={{ color: "black" }} as={Link} to="/">
              TimeTable
            </Nav.Link>
            <Nav.Link style={{ color: "black" }} as={Link} to="/">
              Live Location
            </Nav.Link>
          </Nav>
        </div>
        <div>
          <Button variant="danger">Sign In</Button>
        </div>
      </Nav>
    </Container>
  );
}

export default Header;
