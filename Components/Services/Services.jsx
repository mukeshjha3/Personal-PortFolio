import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from './Mukesh Jha (Full-Stack Developer).pdf'

const Services = () => {
  return (
    <div className="services" id="Services">
      {/* left-Side */}
      <div className="awesome">
        <span>Profile Overview</span>
        <span>About me</span>
        <span>
          I'm a passionate Java full stack developer with a strong
          <br /> foundation in both front-end and back-end technologies. With
          expertise in React <br />
          for dynamic user interfaces, Git for version control, and Maven for
          project management,
          <br /> I thrive in delivering robust and scalable solutions. My
          knowledge extends to microservices architecture,
          <br /> allowing me to design and implement efficient, distributed
          systems.
          <br /> I'm dedicated to continuously learning and adapting to new
          technologies, ensuring <br />I stay at the forefront of software
          development. Let's build innovative solutions together!
        </span>
<a href={Resume} download><button className="button s-button">Download CV</button></a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right-side */}
      <div className="cards">
        {/* 1stcard */}
        <div style={{ left: "16rem"}}>
          <Card
            emoji={HeartEmoji}
            heading="Java Developer"
            details="J2EE, Spring, SpringBoot, Hibernate, SpringSecurity, JWT"
          />
        </div>

        <div style={{ top: "9rem", left: "1rem" }}>
          <Card
            emoji={Glasses}
            heading="FrontEnd Developer"
            details="HTML, CSS, JavaScript, React.js, Tailwind, BootStrap"
          />
        </div>

        <div style={{ top: "19rem", left: "17rem" }}>
          <Card
            emoji={Humble}
            heading="Full-Stack Java Developer"
            details="Java8, HTML5, CSS3, React.js, Tailwind, BootStrap, Maven, Git & GitHub, MicroServices"
          />
        </div>
        <div className="blur s-blur2" style={{background :'var(--purple)'}}></div>
      </div>
    </div>
  );
};

export default Services;
