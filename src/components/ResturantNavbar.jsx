import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const RestaurantNavbar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid={true}>
        <Navbar.Brand href="#home">Epistaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#features"
              active={props.active === "Home" ? true : false}>
              Home
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              active={props.active === "Prenota" ? true : false}>
              Prenota
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              active={props.active === "Admin" ? true : false}>
              Admin
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              active={props.active === "Contattaci" ? true : false}>
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default RestaurantNavbar;
