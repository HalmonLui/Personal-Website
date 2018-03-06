import React, { Component } from 'react';
class Contact extends Component {
  render() {
    return(
      <div className="contacts">
        <a className="hyperlink" href="mailto:luih@wit.edu">
          <p className="contact">
            <img src="https://png.icons8.com/ios/50/000000/secured-letter.png" width="25px" alt="email icon"/> luih@wit.edu
          </p>
        </a>
        <p className="contact">
          <img src="https://png.icons8.com/ios/50/000000/phone.png" width="25px" alt="cellphone icon"/> (617) 733-0634
        </p>
        <a className="hyperlink" href="https://www.linkedin.com/in/halmonlui">
          <p className="contact">
            <img src="https://png.icons8.com/ios/50/000000/contacts.png" width="25px" alt="linkedin icon"/> www.linkedin.com/in/halmonlui
          </p>
        </a>
      </div>
    );
  }
}

export default Contact;
