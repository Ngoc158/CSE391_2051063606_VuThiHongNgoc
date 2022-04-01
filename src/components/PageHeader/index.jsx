import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Row,
} from "react-bootstrap";

import "./index.css";
import HeaderLogo from "../../assets/header-logo.jpg";
import { useNavigate } from "react-router-dom";

const PageHeader = () => {
  const [showHome, setShowHome] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showReservation, setShowReservation] = useState(false);

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

            {/* Menu dropdown */}
            <NavDropdown
              title="Menu"
              id="basic-nav-dropdown"
              show={showMenu}
              onMouseEnter={() => showDropdown(showMenu, setShowMenu)}
              onMouseLeave={() => hideDropdown(setShowMenu)}
              className="menu-link"
            >
              <NavDropdown.Item>Menu style 1</NavDropdown.Item>
              <NavDropdown.Item>Menu style 2</NavDropdown.Item>
              <NavDropdown.Item>Menu style 3</NavDropdown.Item>
            </NavDropdown>

            {/*Gallery dropdown*/}
            <NavDropdown
              title="Gallery"
              id="basic-nav-dropdown"
              show={showGallery}
              onMouseEnter={() => showDropdown(showGallery, setShowGallery)}
              onMouseLeave={() => hideDropdown(setShowGallery)}
              className="menu-link"
            >
              <NavDropdown.Item>Portofolio</NavDropdown.Item>
              <NavDropdown.Item>Portofolio-3</NavDropdown.Item>
              <NavDropdown.Item>Portofolio-4</NavDropdown.Item>
            </NavDropdown>

            {/*Blog dropdown*/}
            <NavDropdown
              title="Blog"
              id="basic-nav-dropdown"
              show={showBlog}
              onMouseEnter={() => showDropdown(showBlog, setShowBlog)}
              onMouseLeave={() => hideDropdown(setShowBlog)}
              className="menu-link"
            >
              <NavDropdown.Item>Blog</NavDropdown.Item>
              <NavDropdown.Item>Blog-single</NavDropdown.Item>
            </NavDropdown>

            {/*Contact dropdown*/}
            <NavDropdown
              title="Contact"
              id="basic-nav-dropdown"
              show={showContact}
              onMouseEnter={() => showDropdown(showContact, setShowContact)}
              onMouseLeave={() => hideDropdown(setShowContact)}
              className="menu-link"
            ></NavDropdown>

            {/*Reservation dropdown*/}
            <NavDropdown
              title="Reservation"
              id="basic-nav-dropdown"
              show={showReservation}
              onMouseEnter={() =>
                showDropdown(showReservation, setShowReservation)
              }
              onMouseLeave={() => hideDropdown(setShowReservation)}
              className="menu-link"
            ></NavDropdown>
          </div>
          {/* Toggle */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton className="OurName">
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Our Menu
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Container>
              <Row>
                <Col xs>First, buderedt unor</Col>
                <Col xs={{ order: 12 }}>Second, but last</Col>
                <Col xs={{ order: 1 }}>Third, but second</Col>
              </Row>
            </Container>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default PageHeader;
