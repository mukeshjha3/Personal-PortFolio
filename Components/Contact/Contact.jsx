import React, { useRef, useState } from "react";
import './Contact.css'
import emailjs from 'emailjs-com';

const Contact = () => {
  const [done, setDone] =useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      "mukesh_portfolio",
      "template_9sczu2l",
      form.current,
      "zdrwPGChWAItbHhGI"
    )
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-form" id="contact">
            
      <div className="w-left">
        <div className="awesome">
           <span>Get in Touch</span>
           <span style={{ fontFamily: "'Montaga', serif" }}>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div> 


      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="from_name"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
