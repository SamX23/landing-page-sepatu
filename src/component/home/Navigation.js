import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => (
  <Navbar className="container navbar-expand-md navbar-dark">
    <Navbar.Brand href="#">BAKULSEPATU</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="ms-auto">
        <Nav.Link href="https://web.facebook.com/SamiKalamallah/">
          <i className="fa fa-facebook-f"></i>
        </Nav.Link>
        <Nav.Link href="https://instagram.com/samikalamallah">
          <i className="fa fa-instagram"></i>
        </Nav.Link>
        <Nav.Link href="https://github.com/samx23/">
          <i className="fa fa-github"></i>
        </Nav.Link>
        <Nav.Link href="https://wa.me/6289657511134">
          <i className="fa fa-whatsapp"></i>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
