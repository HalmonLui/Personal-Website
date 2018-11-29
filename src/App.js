import React, { Component } from "react";
import Experiences from "./Components/Experiences";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import * as Scroll from "react-scroll";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import "./css/App.css";

import profilePicture from "./images/profile-picture.jpg";
import downarrow from "./images/down-icon.png";
import personalwebsite from "./images/personalwebsite.png";
import chatbot from "./images/chatbot.png";
import porododge from "./images/poroDodge.png";
import musicboi from "./images/musicboi.png";
import stockfindar from "./images/stock-findar.PNG";

class App extends Component {
  openSlideMenu = function() {
    var element = document.getElementById("side-menu");
    element.style.width = "250px";
  };
  closeSlideMenu = function() {
    var element = document.getElementById("side-menu");
    element.style.width = "0px";
  };

  top = function() {
    var element = document.getElementById("top");
    var scrollIntoViewOptions = {
      behavior: "smooth"
    };
    element.scrollIntoView(scrollIntoViewOptions);
  };
  profile = function() {
    var element = document.getElementById("profile");
    var scrollIntoViewOptions = {
      behavior: "smooth"
    };
    element.scrollIntoView(scrollIntoViewOptions);
  };
  experience = function() {
    var element = document.getElementById("experience");
    var scrollIntoViewOptions = {
      behavior: "smooth"
    };
    element.scrollIntoView(scrollIntoViewOptions);
  };
  project = function() {
    var element = document.getElementById("project");
    var scrollIntoViewOptions = {
      behavior: "smooth"
    };
    element.scrollIntoView(scrollIntoViewOptions);
  };
  contact = function() {
    var element = document.getElementById("contact");
    var scrollIntoViewOptions = {
      behavior: "smooth"
    };
    element.scrollIntoView(scrollIntoViewOptions);
  };

  render() {
    var d = new Date();

    return (
      <div className="App">
        <nav className="navbar">
          <span className="open-slide">
            <p onClick={this.openSlideMenu}>
              <svg width="30" height="30">
                <path d="M0,5 30,5" stroke="#000" stroke-width="5" />
                <path d="M0,14 30,14" stroke="#000" stroke-width="5" />
                <path d="M0,23 30,23" stroke="#000" stroke-width="5" />
              </svg>
            </p>
          </span>
        </nav>

        <div id="side-menu" className="side-nav">
          <p className="btn-close" onClick={this.closeSlideMenu}>
            &times;
          </p>
          <p onClick={this.top}>Welcome</p>
          <p onClick={this.profile}>Profile</p>
          <p onClick={this.experience}>Experience</p>
          <p onClick={this.project}>Projects</p>
          <p onClick={this.contact}>Contact</p>
        </div>

        <div id="main" onClick={this.closeSlideMenu}>
          <div id="top" className="pimg1">
            <div className="ptext">
              <span className="border">Halmon Lui</span>
              <p className="border trans">Computer Engineer</p>
              <img
                className="toProfile"
                onClick={this.profile}
                src={downarrow}
                alt="V"
              />
            </div>
          </div>
          <section id="profile" className="section section-dark">
            <h2>Profile</h2>
            <hr />
            <div className="profileLeft">
              <img
                className="profilepic"
                src={profilePicture}
                alt="Halmon's Profile Picture"
              />
              <p>
                <b>Name:</b> <br />
                Halmon Lui <br />
                <br />
                <b>Age:</b> <br />
                21
                <br />
                <br />
                <b>Location:</b> <br />
                Greater Boston, MA
              </p>
            </div>
            <div className="profileRight">
              <h3>About Me</h3>
              <p>
                Hi I’m Halmon, a student who enjoys working from the front-end
                to the back-end.
              </p>
              <p>
                I'm constantly cycling through new ideas be it designing a
                website or creating a program.
              </p>
              <p>
                It all started with my TI-84: the quadratic formula, the gateway
                drug to programming.
              </p>
              <p>
                Aside from programming, I'm an avid pianist and I love to create
                music.
              </p>
              <p>
                If you have a question for me or want to drop me a quick note,
                please do not hesitate to{" "}
                <a id="getInTouch" onClick={this.contact}>
                  get in touch
                </a>
                .
              </p>
            </div>
            <div className="clear" />
          </section>
          <section id="profile" className="section section-light">
            <h2>Education</h2>
            <hr />
            <Experiences
              place="Wentworth Institute of Technology"
              duration="September 2015 - Present"
              title="Bachelor - Computer Engineering (Minor: Computer Science)"
              description=""
              location="Boston, MA"
            />
            <Experiences
              place="Braintree High School"
              duration="September 2011 - June 2015"
              title="High School Education"
              description=""
              location="Braintree, MA"
            />
          </section>

          <div id="experience" className="pimg2">
            <div className="ptext">
              <span className="border trans">Experience</span>
            </div>
          </div>

          <section className="section section-dark">
            <h2>Career</h2>
            <hr />
            <Experiences
              place="Visible Systems Corp"
              duration="September 2018 - Present"
              title="Full-time Developer Co-op"
              description="Redesign the web application by replacing existing Razor Pages with React in the ASP.NET MVC framework."
              location="Boston, MA"
            />
            <Experiences
              place="Biotake"
              duration="January 2018 - Present"
              title="Research Assistant"
              description="I engineered better methods for creating a lightweight real-time big data framework. Additionally, I designed the RESTful API and Database model with a paper on security"
              location="Boston, MA"
            />
            <Experiences
              place="Electrical Lab"
              duration="September 2015 - Present"
              title="Part-time Lab Assistant"
              description="I manage the inventory, set up the lab equipment, and help students with parts that they need for their circuits. "
              location="Boston, MA"
            />
            <Experiences
              place="LM Heavy Civil"
              duration="May 2016 - August 2016"
              title="Full-time Estimating Intern"
              description="I did important takeoffs for upcoming civil projects which helped decide the total bid price of a new job."
              location="Quincy, MA"
            />
            <br />
            <br />
          </section>
          <section className="section section-light">
            <h2>Additional Experience</h2>
            <hr />
            <Experiences
              place="Hackathons"
              duration="December 2017 - Present"
              title="Hacker"
              description="Local Hack Day 2017 Simmons, MakeHarvard 2018, MakeMIT 2018, PerkinsHacks 2018, HackHarvard 2018, HackWellesley 2018, BostonHacks 2018, Local Hack Day 2018 BU"
              location="Boston, MA"
            />
            <Experiences
              place="Dunkin' Donuts"
              duration="September 2015 - June 2018"
              title="Part-time Employee"
              description=""
              location="Milton, MA"
            />
          </section>

          <div id="project" className="pimg3">
            <div className="ptext">
              <span className="border trans">Projects</span>
            </div>
          </div>

          <section className="section section-light">
            <a id="github" target="_blank" href="https://github.com/halmonlui">
              <h2>github.com/halmonlui</h2>
            </a>
            <hr />
            <Projects
              title="Stock FindAR"
              source={stockfindar}
              link="https://github.com/HalmonLui/whack_2018"
              description="Discover what items have stocks behind it through this augmented reality application and view it on the website."
              tags="Node.js, React.js, React Native, Flask, Python3, Serveo, Viro Media"
            />
            <Projects
              title="Texting Chatbot"
              source={chatbot}
              link="https://github.com/HalmonLui/MLH-Local-Hack-Day"
              description="Texting chatbot assists in daily minor tasks. Eg: Searching for wikipedia articles, current stock prices, etc."
              tags="Python3, Flask, Twilio, Ngrok"
            />
            <Projects
              title="MusicBoi"
              source={musicboi}
              link="https://github.com/HalmonLui/hack_harvard_2018/tree/FlaskServer"
              description="Transform your words to midi music through our app, website, or chrome extension."
              tags="Python3, Flask, Serveo, React-Native"
            />
            <div className="clear" />
          </section>

          <div id="contact" className="pimg4">
            <div className="ptext">
              <span className="border trans">Contact</span>
            </div>
          </div>

          <section className="section section-dark">
            <h2>Contact</h2>
            <hr />
            <br />
            <div className="ContactWrapper">
              <Contact />
            </div>
            <br />
            <br />
            <br />

            <footer>
              <hr />
              <br />
              <a className="toTop" onClick={this.top}>
                Back To The Top
              </a>
              <p>
                <i>Copyright © {d.getFullYear()} Halmon Lui</i>
              </p>
            </footer>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
