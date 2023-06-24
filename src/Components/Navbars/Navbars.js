import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Footer from "../Footer/Footer";
import logo from "../../Images/logo.png";
import {Link} from "react-router-dom"
import "./Navbars.css";
function Navbars() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="main_navbar">
        <Navbar.Brand className="logo">
          <img className="logo_pic" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  className="link_div" id="responsive-navbar-nav">
          <Nav className="me-auto">
         
          </Nav>
          <Nav className="navbar_linkitem">
            <Nav.Link className="navbar_links" href="/">Home</Nav.Link>
            <Nav.Link className="navbar_links" href="/about">About Us</Nav.Link>
            <Nav.Link className="navbar_links" href="/program">Programs</Nav.Link>
            <Nav.Link className="navbar_links" href="/career">Careers</Nav.Link>
            <Nav.Link className="navbar_links" href="/contact">Contact</Nav.Link>
            <Link to="/donate" className="link_donate">
            <button className="donate_button">Donate</button>
            </Link>
         
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      {/* <Footer /> */}
    </div>
    
  );
}

export default Navbars;
