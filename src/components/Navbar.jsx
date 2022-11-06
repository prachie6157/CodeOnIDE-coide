import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setNavState(window.pageYOffset > 140);
  };
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Learning"
              menuVariant="dark"
            >
              <li><NavDropdown.Item href="#action/3.1">OOP</NavDropdown.Item></li>
              <li><NavDropdown.Item href="#action/3.2">
                DSA
              </NavDropdown.Item></li>
              <li><NavDropdown.Item href="#action/3.3">DBMS</NavDropdown.Item></li>
            </NavDropdown>
          </li>
          <li>
            <a href="https://prachie6157.github.io/THE_WEEKND_1">Code Editor</a> {/*https://prachie6157.github.io/THE_WEEKND_18*/}
          </li>
          <li>
            <a href="#about">Quiz</a>
          </li>
          <li>
            <a href="#signup">Challenge</a>
          </li>
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
