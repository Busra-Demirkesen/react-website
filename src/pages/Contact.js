import React from "react";
import PizzaLeft from "../assets/images/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter fullname" type="text"></input>

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email" type="email"></input>
          <label
            htmlFor="message"
            placeholder="Enter message"
            type="text"
          ></label>
          <textarea
            rows=""
            placeholder="Enter your message"
            name="message"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
