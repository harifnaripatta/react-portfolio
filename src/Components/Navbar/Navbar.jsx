import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const [theme, setTheme] = useState();
  // const bodyStyle = {
  //   backgroundColor: theme === "light" ? "white" : "black",
  //   color: theme === "light" ? "black" : "white",
  // };
  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  //   // setTheme(!theme);
  // };
  // ${theme === "dark" ? "dark" : "light"}
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className={"nav-wrapper"}>
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
                <button className="btn">
                  Hire Me
                  <img src="/arrow-up-right.svg" alt="arrow up light" />
                </button>
                <a href="#">
                  <img
                    src={`${
                      theme === "dark" ? "/dark-theme.svg" : "/light-theme.svg"
                    }`}
                    alt="dark"
                  />
                </a>
              </div>
            </ul>

            <button className="menu-btn" onClick={toggleMenu}>
              {openMenu ? (
                <i className="fa-solid fa-xmark"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
