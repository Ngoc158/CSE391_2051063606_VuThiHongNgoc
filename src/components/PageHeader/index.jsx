import React, { useState } from "react";
import {
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import useViewport from "../../hooks/useViewport";

import "./index.css";
import HeaderLogo from "../../assets/header-logo.jpg";
import MenuImg1 from "../../assets/menu-img-1.jpg";
import MenuImg2 from "../../assets/menu-img-2.jpg";
import MenuImg3 from "../../assets/menu-img-3.jpg";
import MenuImg4 from "../../assets/menu-img-4.jpg";
import MenuImg5 from "../../assets/menu-img-5.jpg";
import MenuImg6 from "../../assets/menu-img-6.jpg";
import MenuImg7 from "../../assets/menu-img-7.jpg";
import MenuImg8 from "../../assets/menu-img-8.jpg";
import MenuImg9 from "../../assets/menu-img-9.jpg";

const PageHeader = () => {
  const navigate = useNavigate();
  const viewport = useViewport();

  const [showHome, setShowHome] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showBlog, setShowBlog] = useState(false);

  const menuArr = [
    MenuImg1,
    MenuImg2,
    MenuImg3,
    MenuImg4,
    MenuImg5,
    MenuImg6,
    MenuImg7,
    MenuImg8,
    MenuImg9,
  ];

  const isBreakHeader = viewport.width <= 1053;

  // Action
  const handleShowDropdown = (show, setShow) => {
    setShow(!show);
  };
  const handleHideDropdown = (setShow) => {
    setShow(false);
  };

  // Component menu item header
  const MenuItem = () => (
    <>
      {/* Home dropdown */}
      <NavDropdown
        title="Home"
        id="basic-nav-dropdown"
        show={showHome}
        onMouseEnter={() => handleShowDropdown(showHome, setShowHome)}
        onMouseLeave={() => handleHideDropdown(setShowHome)}
        className="menu-link"
      >
        <NavDropdown.Item onClick={() => navigate("/")}>Index</NavDropdown.Item>
        <NavDropdown.Item>Index-1</NavDropdown.Item>
        <NavDropdown.Item>Index-2</NavDropdown.Item>
      </NavDropdown>

      {/* Pages dropdown */}
      <NavDropdown
        title="Pages"
        id="basic-nav-dropdown"
        show={showPages}
        onMouseEnter={() => handleShowDropdown(showPages, setShowPages)}
        onMouseLeave={() => handleHideDropdown(setShowPages)}
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
        onMouseEnter={() => handleShowDropdown(showMenu, setShowMenu)}
        onMouseLeave={() => handleHideDropdown(setShowMenu)}
        className="menu-link"
      >
        <NavDropdown.Item onClick={() => navigate("/menu")}>
          Menu style 1
        </NavDropdown.Item>
        <NavDropdown.Item>Menu style 2</NavDropdown.Item>
        <NavDropdown.Item>Menu style 3</NavDropdown.Item>
      </NavDropdown>

      {/*Gallery dropdown*/}
      <NavDropdown
        title="Gallery"
        id="basic-nav-dropdown"
        show={showGallery}
        onMouseEnter={() => handleShowDropdown(showGallery, setShowGallery)}
        onMouseLeave={() => handleHideDropdown(setShowGallery)}
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
        onMouseEnter={() => handleShowDropdown(showBlog, setShowBlog)}
        onMouseLeave={() => handleHideDropdown(setShowBlog)}
        className="menu-link"
      >
        <NavDropdown.Item>Blog</NavDropdown.Item>
        <NavDropdown.Item>Blog-single</NavDropdown.Item>
      </NavDropdown>

      {/*Contact dropdown*/}
      <NavDropdown
        title="Contact"
        id="basic-nav-dropdown"
        className="menu-link not-have-down-arrow"
      ></NavDropdown>

      {/*Reservation dropdown*/}
      <NavDropdown
        title="Reservation"
        id="basic-nav-dropdown"
        className="menu-link not-have-down-arrow reservation-menu-item"
      ></NavDropdown>
    </>
  );

  return (
    <div className="header-wrapper">
      <Navbar
        expand={false}
        className={`navbar-header ${isBreakHeader && "padding-header-0"}`}
        sticky
      >
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand onClick={() => navigate("/")}>
            <img src={HeaderLogo} alt="header logo" />
          </Navbar.Brand>

          {/* Toggle side-bar right */}
          {isBreakHeader && <Navbar.Toggle aria-controls="navbarScroll" />}

          {/* content here */}
          {isBreakHeader ? (
            <Navbar.Collapse id="navbarScroll">
              <Nav className="row-header">
                <MenuItem />
              </Nav>
            </Navbar.Collapse>
          ) : (
            <MenuItem />
          )}

          {!isBreakHeader && (
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              className="canvas-menu-right"
            >
              <Offcanvas.Header closeButton className="OurName">
                <Offcanvas.Title
                  id="offcanvasNavbarLabel"
                  className="menu-right-name"
                >
                  Our Menu
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Container>
                <Row className="row-img-menu">
                  {menuArr.map((item, index) => (
                    <Col key={index} sm={4}>
                      <img src={item} alt="" />
                    </Col>
                  ))}
                </Row>
              </Container>
            </Navbar.Offcanvas>
          )}

          {/* Toggle side-bar right */}
          {!isBreakHeader && <Navbar.Toggle aria-controls="offcanvasNavbar" />}
        </Container>
      </Navbar>
    </div>
  );
};

export default PageHeader;
