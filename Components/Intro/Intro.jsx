import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedln from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumpup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Mukesh Jha</span>
          <span>
            <em>
              Seasoned Full stack Java developer proficient in Front-end and
              Back-end technologies, with expertise in delivering robust
              solutions.
            </em>
          </span>
        </div>
        <Link to="contact" smooth={true}>
        <button className="button i-button">Hire me</button></Link>
        <div className="i-icons">
          <a
            href="https://github.com/mukeshjha3"
            target="_blank"
            rel="noopener"
          >
            <img src={Github} alt="GitHub_Image" />
          </a>
          <a
            href="https://www.linkedin.com/in/mukesh-jha-243884216/"
            target="_blank"
            rel="noopener"
          >
            <img src={Linkedln} alt="Linkedln_Iamge" />
          </a>
          <a
            href="https://www.instagram.com/mukeshjha33/"
            target="_blank"
            rel="noopener"
          >
            <img src={Instagram} alt="Instagram_Image" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="vector1_png" />
        <img src={Vector2} alt="vector2_png" />
        <img src={boy} alt="boy-png" />
        <img src={glassesimoji} alt="glassesimoji-png" />
        <div style={{ top: "-4%", left: "68%" }}
        className="floating-div">

          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "3rem" }}
        className="floating-div">
          <FloatingDiv image={thumpup} text1="Java" text2="Developer" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
