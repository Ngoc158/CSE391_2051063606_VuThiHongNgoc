import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

import "./index.css";
import HeaderLogo from "../../assets/header-logo.jpg";
import { useNavigate } from "react-router-dom";

const PageHeader = () => {
  const [showHome, setShowHome] = useState(false);
  const [showPages, setShowPages] = useState(false);

  const navigate = useNavigate();

  // Action
  const showDropdown = (show, setShow) => {
    setShow(!show);
  };
  const hideDropdown = (setShow) => {
    setShow(false);
  };

  return (
    <div className="header-wrapper">
      <Navbar expand={false} className="navbar-header">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand onClick={() => navigate("/")}>
            <img src={HeaderLogo} alt="header logo" />
          </Navbar.Brand>

          {/* content here */}
          <div className="row-header">
            {/* Home dropdown */}
            <NavDropdown
              title="Home"
              id="basic-nav-dropdown"
              show={showHome}
              onMouseEnter={() => showDropdown(showHome, setShowHome)}
              onMouseLeave={() => hideDropdown(setShowHome)}
              className="menu-link"
            >
              <NavDropdown.Item onClick={() => navigate("/")}>
                Index
              </NavDropdown.Item>
              <NavDropdown.Item>Index-1</NavDropdown.Item>
              <NavDropdown.Item>Index-2</NavDropdown.Item>
            </NavDropdown>

            {/* Pages dropdown */}
            <NavDropdown
              title="Pages"
              id="basic-nav-dropdown"
              show={showPages}
              onMouseEnter={() => showDropdown(showPages, setShowPages)}
              onMouseLeave={() => hideDropdown(setShowPages)}
              className="menu-link"
            >
              <NavDropdown.Item>About</NavDropdown.Item>
              <NavDropdown.Item>About-us</NavDropdown.Item>
              <NavDropdown.Item>Terms {"&"} privacy</NavDropdown.Item>
            </NavDropdown>
          </div>

          {/* Toggle */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default PageHeader;
