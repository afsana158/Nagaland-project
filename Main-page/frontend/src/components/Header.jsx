import React, { useEffect, useState } from "react";
import "./../styles/HeaderStyles.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link  } from "react-router-dom";
import Logo from "./../assets/nagalandLogo1.webp";

function Header() {
  
  

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  


  // mobile menu state
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main"); // main | about | explore | plan

  useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // navbar show / hide
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    // top detection (STRICT)
    if (currentScrollY === 0) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  // reset menu when closing
  const closeMenu = () => {
    setShowOffcanvas(false);
    setActiveMenu("main");
  };

  return (
    <header>
      {/* ================= DESKTOP NAVBAR (UNCHANGED) ================= */}
      <Navbar
        expand="lg"
        fixed="top"
        className={`
                  ${showNavbar ? "navbar--visible" : "navbar--hidden"}
                ${isAtTop ? "navbar--transparent" : "navbar--black"}
                `}
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="logo">
            <img src={Logo} alt="Nagaland Tourism" />
          </Navbar.Brand>

          {/* MOBILE ICONS */}
          <div className="mobile-icons d-lg-none">
            <i className="bi bi-people"></i>
            <i className="bi bi-cart3"></i>
            <button
              className="menu-btn"
              onClick={() => setShowOffcanvas(true)}
            >
              <i className="bi bi-list"></i>
            </button>
          </div>

          {/* DESKTOP CONTENT */}
          <Navbar.Collapse className="d-none d-lg-flex">
            <div className="navbar-center">  
             <Nav className="desktop-nav">

                  {/* ABOUT – SIMPLE LIST */}
                  <NavDropdown title="About" className="simple-dropdown" autoClose="outside">
                    <NavDropdown.Item as={Link} to="/about/overview">Overview</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/about/tribes">Tribes</NavDropdown.Item>
                  </NavDropdown>

                  {/* EXPLORE – FLYOUT */}
                  <NavDropdown title="Explore" className="simple-dropdown" autoClose="outside">
                    <NavDropdown.Item as={Link} to="/explore/destinations">Destinations</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/explore/adventure">Adventure</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/explore/culture">Culture & Lifestyle</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/explore/festivals">Festivals</NavDropdown.Item>
                  </NavDropdown>

                  {/* PLAN – FLYOUT */}
                  <NavDropdown title="Plan" className="simple-dropdown" autoClose="outside">
                    
                    <NavDropdown.Item as={Link} to="/plan/traveltype">Travel by Type</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/plan/stays">Stays</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/plan/itenaries">Itenaries</NavDropdown.Item>
                  </NavDropdown>

                </Nav>

            </div>

            <Nav className="nav-icons">
              <Nav.Link><i className="bi bi-people"></i></Nav.Link>
              <Nav.Link><i className="bi bi-search"></i></Nav.Link>
              <Nav.Link><i className="bi bi-cart3"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ================= MOBILE OFFCANVAS ================= */}
      <Offcanvas
        show={showOffcanvas}
        onHide={closeMenu}
        placement="end"
        className="mobile-offcanvas"
      >
        <Offcanvas.Header closeButton />

        <Offcanvas.Body className="mobile-menu">

          {/* SEARCH */}
          {activeMenu === "main" && (
            <div className="mobile-search">
              <i className="bi bi-search"></i>
              <input placeholder="Search" />
            </div>
          )}

          {/* MAIN MENU */}
          {activeMenu === "main" && (
            <ul className="mobile-menu-list">
              <li className="menu-item">
                <span>About</span>
                <button className="button-arr" onClick={() => setActiveMenu("about")}>
                  <i className="bi bi-chevron-right"></i>
                </button>
              </li>

              <li className="menu-item">
                <span>Explore</span>
                <button className="button-arr" onClick={() => setActiveMenu("explore")}>
                  <i className="bi bi-chevron-right"></i>
                </button>
              </li>

              <li className="menu-item">
                <span>Plan</span>
                <button className="button-arr" onClick={() => setActiveMenu("plan")}>
                  <i className="bi bi-chevron-right"></i>
                </button>
              </li>
              <li className="menu-item">
                <span>Contact Us</span>
              </li>
              <li className="menu-item">
                <span>Privacy Policy</span>
              </li>

            </ul>
          )}

          {/* ABOUT SUBMENU */}
          {activeMenu === "about" && (
            <div className="submenu-screen">
              <div className="submenu-header">
                <button onClick={() => setActiveMenu("main")}>
                  <i className="bi bi-chevron-left"></i>
                </button>
                <span>About</span>
              </div>
              <ul className="submenu-list">
                <li>Overview</li>
                <li>Culture</li>
                <li>People</li>
              </ul>
            </div>
          )}

          {/* EXPLORE SUBMENU */}
          {activeMenu === "explore" && (
            <div className="submenu-screen">
              <div className="submenu-header">
                <button onClick={() => setActiveMenu("main")}>
                  <i className="bi bi-chevron-left"></i>
                </button>
                <span>Explore</span>
              </div>
              <ul className="submenu-list">
                <li>Destinations</li>
                <li>Nature</li>
                <li>Adventure</li>
              </ul>
            </div>
          )}

          {/* PLAN SUBMENU */}
          {activeMenu === "plan" && (
            <div className="submenu-screen">
              <div className="submenu-header">
                <button onClick={() => setActiveMenu("main")}>
                  <i className="bi bi-chevron-left"></i>
                </button>
                <span>Plan</span>
              </div>
              <ul className="submenu-list">
                <li>Itinerary</li>
                <li>Travel Tips</li>
                <li>Permits</li>
              </ul>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}

export default Header;
