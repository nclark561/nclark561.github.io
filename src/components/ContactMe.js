import React from "react";
import "./ContactMe.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactMe = () => {
  const form = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let firstName = document.getElementById('first-name-in').value
    let lastName = document.getElementById('last-name-in').value
    let name = firstName + ' ' + lastName

    const templateParams = {
      from_name: name,
      message: document.getElementById('message').value,
      reply_to: document.getElementById('email').value
    }

    emailjs.send("service_66lezsk", "template_fhzcns8", templateParams, 'XTlaPLnVB0QvCO1vW').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    evt.target.reset();
  };

  return (
    <div className="contact-me">
      <h1 className="contact-h" id="contact-h1">
        Contact me!
      </h1>
      <h2 className="contact-h" id="contact-h2">
        Always willing to do freelance/contract work
      </h2>
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <div className="name-div">
          <div className="input-div" id="first-name">
            <label>First name</label>
            <input type="text" className="names" id='first-name-in'/>
          </div>
          <div className="input-div" id="last-name">
            <label>Last name</label>
            <input type="text" className="names" id='last-name-in'/>
          </div>
        </div>
        <div className="input-div">
          <label>Email</label>
          <input type="text" className="message" id="email"/>
        </div>
        <div className="input-div">
          <label>Your message</label>
          <input type="text" className="message" id="message" />
        </div>
        <button type="submit" className="submit">
          Send it
        </button>
      </form>
    </div>
  );
};
