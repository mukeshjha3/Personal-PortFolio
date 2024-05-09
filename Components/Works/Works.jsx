import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../ToggleContext/Context";
import { Link } from "react-scroll";

const Works = () => {
  const { darkMode, setDarkMode } = useContext(themeContext);

  return (
    <div className="works">
      <div className="w-left">
        <div className="awesome">
          <span>Professional Experience</span>
          <span>Worked for</span>
          <span></span>
          <span style={{ color: darkMode ? "White" : "black" }}>
            <u>JSW (JINDAL STEEL WORKS)</u>
            <br />
            <u> Clayfin Technologies Private Limited </u>
            <br />
            <u> Voicera-Analytics Private Limited </u>
            <br />
          </span>
          <Link to="contact" smooth={true}>
            <button className="button s-button">Hire me</button>
          </Link>
        </div>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
