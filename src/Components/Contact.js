import React, { Component } from "react";
import emailicon from "../images/email-icon.png";
import phoneicon from "../images/phone-icon.png";
import contacticon from "../images/contact-icon.png";
import fileicon from "../images/file-icon.svg";
import resume from '../HalmonLui_Resume.pdf';

class Contact extends Component {
  render() {
    return (
      <div className="contacts">
        <a
          className="hyperlink"
          target="_blank"
          href="mailto:halmonlui@gmail.com"
        >
          <div className="contact">
            <img src={emailicon} alt="email icon" />{" "}
            <p>
              halmonlui@gmail.com
            </p>
          </div>
        </a>
        <div className="contact">
          <img src={phoneicon} alt="cellphone icon" />
          <p>
             617.733.0634
          </p>
        </div>
        <a
          className="hyperlink"
          target="_blank"
          href="https://www.linkedin.com/in/halmonlui"
        >
        <div className="contact">
          <img src={contacticon} alt="linkedin icon" />
          <p>
            www.linkedin.com/in/halmonlui
          </p>
        </div>
        </a>
        <a
          className="hyperlink"
          target="_blank"
          href={resume}
        >
        <div className="contact">
          <img src={fileicon} alt="resume icon" />
          <p>
            Download Resume
          </p>
        </div>
        </a>
      </div>
    );
  }
}

export default Contact;
