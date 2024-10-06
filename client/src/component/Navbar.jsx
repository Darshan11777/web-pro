import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import the arrow right
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink

function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="section-header bg-white fixed top-0 ">
      <div className="container flex align-items-center">
        <div className="header-logo ">
          <NavLink to="/"  className=" ">
            {" "}
            {/* Changed to NavLink */}
            <img src={logo} alt="Whitelabel" className="h-[50px]" />
          </NavLink>
        </div>
        <div className={`header-nav  ${isMenuOpen ? "open" : " none"}`}>
          <div className="nav-main">
            <ul className="navbar-nav">
              <li className="nav-item dropdown-item menu-children">
                <NavLink to="/" className="drop-nav-item">
                  {" "}
                  {/* Changed to NavLink */}
                  More Pages
                </NavLink>
                <div className="toggal-nav">
                  <h3>More Products</h3>
                  <ul className="dropdown-menu-item ">
                    <li className="item-menu ">
                      <NavLink
                        to="/"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                          `text-black relative after:absolute after:left-0 after:bottom-[-2px] after:h-[3px] after:w-full after:bg-red-500 after:transition-all after:duration-300 after:origin-left hover:after:scale-x-100 ${
                            isActive
                              ? "after:scale-x-100 text-red-500"
                              : "after:scale-x-0"
                          }`
                        }
                      >
                        {/* Changed to NavLink */}
                        Home
                      </NavLink>
                    </li>
                    <li className="item-menu">
                      <NavLink
                      onClick={toggleMenu}
                        to="/our-service"
                        className={({ isActive }) =>
                          `text-black relative after:absolute after:left-0 after:bottom-[-2px] after:h-[3px] after:w-full after:bg-red-500 after:transition-all after:duration-300 after:origin-left hover:after:scale-x-100 ${
                            isActive
                              ? "after:scale-x-100 text-red-500"
                              : "after:scale-x-0"
                          }`
                        }
                      >
                        {/* Changed to NavLink */}
                        Our Service
                      </NavLink>
                    </li>
                    <li className="item-menu">
                      <NavLink    to="/about-us"
                      onClick={toggleMenu}
                        className={({ isActive }) =>
                          `text-black relative after:absolute after:left-0 after:bottom-[-2px] after:h-[3px] after:w-full after:bg-red-500 after:transition-all after:duration-300 after:origin-left hover:after:scale-x-100 ${
                            isActive
                              ? "after:scale-x-100 text-red-500"
                              : "after:scale-x-0"
                          }`
                        }>
                        {" "}
                        {/* Changed to NavLink */}
                        About Us
                      </NavLink>
                    </li>
                    <li className="item-menu">
                      <NavLink    to="/inquiry"
                      onClick={toggleMenu}
                        className={({ isActive }) =>
                          `text-black relative after:absolute after:left-0 after:bottom-[-2px] after:h-[3px] after:w-full after:bg-red-500 after:transition-all after:duration-300 after:origin-left hover:after:scale-x-100 ${
                            isActive
                              ? "after:scale-x-100 text-red-500"
                              : "after:scale-x-0"
                          }`
                        }>
                        {" "}
                        {/* Changed to NavLink */}
                        Inquiry
                      </NavLink>
                    </li>
                    <li className="item-menu">
                      <NavLink    to="/contact-us"
                      onClick={toggleMenu}
                        className={({ isActive }) =>
                          `text-black relative after:absolute after:left-0 after:bottom-[-2px] after:h-[3px] after:w-full after:bg-red-500 after:transition-all after:duration-300 after:origin-left hover:after:scale-x-100 ${
                            isActive
                              ? "after:scale-x-100 text-red-500"
                              : "after:scale-x-0"
                          }`
                        }>
                        {" "}
                        {/* Changed to NavLink */}
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                  <button className=" border-black px-6 py-3 rounded-[50px] border-[2px] flex ">
                    <NavLink    to="/new-project"
                    onClick={toggleMenu}
                        className={({ isActive }) =>
                          `text-black relative after:absolute after:left-0 after:bottom-[-2px] after:h-[3px] after:w-full after:bg-red-500 after:transition-all after:duration-300 after:origin-left hover:after:scale-x-100 ${
                            isActive
                              ? "after:scale-x-100 text-red-500"
                              : "after:scale-x-0"
                          }`
                        }>
                      {" "}
                      {/* Changed to NavLink */}
                      Start Your Project
                    </NavLink>
                    <span className=" p-3 h-6 w-6 bg-green-500">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="h-6 w-6"
                      />
                    </span>
                  </button>
                </div>
                <span className="menuTriggle">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </li>
              
            </ul>
          </div>

          <button onClick={toggleMenu} className="toggle-menu">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </button>
          <div className={`bodyoverlay ${isMenuOpen ? " open" : ""}`}></div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
