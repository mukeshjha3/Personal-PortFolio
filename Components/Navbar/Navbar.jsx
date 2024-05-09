import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Mukesh</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to={Navbar}
              activeClass="activeClass"
              smooth={true}
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>About</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Experiences</li>
            </Link>
            <Link spy={true} to="PortFolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <Link to="contact" smooth={true}>
          <button className="button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
