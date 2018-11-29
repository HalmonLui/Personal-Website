import React, { Component } from "react";
import emailicon from "../images/email-icon.png";
import phoneicon from "../images/phone-icon.png";
import contacticon from "../images/contact-icon.png";
class Contact extends Component {
  render() {
    return (
      <div className="contacts">
        <a
          className="hyperlink"
          target="_blank"
          href="mailto:halmonlui@gmail.com"
        >
          <p className="contact">
            <img src={emailicon} width="25px" alt="email icon" />{" "}
            halmonlui@gmail.com
          </p>
        </a>
        <p className="contact">
          <img src={phoneicon} width="25px" alt="cellphone icon" /> (617)
          733-0634
        </p>
        <a
          className="hyperlink"
          target="_blank"
          href="https://www.linkedin.com/in/halmonlui"
        >
          <p className="contact">
            <img src={contacticon} width="25px" alt="linkedin icon" />{" "}
            www.linkedin.com/in/halmonlui
          </p>
        </a>
      </div>
    );
  }
}

export default Contact;
