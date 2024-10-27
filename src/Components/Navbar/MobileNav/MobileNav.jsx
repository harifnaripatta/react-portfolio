import React from "react";
import "./MobileNav";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container">
        <div className="nav-logo">
          <img src="/logo.svg" alt="logo" />
          <span>
            HARIF <br /> NARIPPATTA
          </span>
        </div>
        <ul>
          <li className="active">
            <a href="#" className="menu-item">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              Work Experience
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              Contact Me
            </a>
          </li>

          <button className="contact-btn" onClick={() => {}}>
            Hire Me
            <img src="/arrow-up-right.svg" alt="arrow up light" />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
