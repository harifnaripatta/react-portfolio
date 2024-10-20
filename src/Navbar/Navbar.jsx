import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="wrapper">
        <div className="nav-content">
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
          </ul>
          <div className="nav-btn">
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
              <img src="/arrow-up-right.svg" alt="arrow up light" />
            </button>
            <a href="#">
              <img src="/light-theme.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
