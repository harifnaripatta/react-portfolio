import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="container">
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
              <div className="nav-btn">
                <button className="contact-btn">
                  Hire Me
                  <img src="/arrow-up-right.svg" alt="arrow up light" />
                </button>
                <a href="#">
                  <img src="/light-theme.svg" alt="" />
                </a>
              </div>
            </ul>

            <button className="menu-btn" onClick={toggleMenu}>
              {openMenu ? (
                <i class="fa-solid fa-xmark"></i>
              ) : (
                <i class="fa-solid fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
