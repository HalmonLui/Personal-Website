import React, { Component } from "react";
import Experiences from "./Components/Experiences";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import * as Scroll from "react-scroll";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { CSSTransitionGroup } from "react-transition-group";
import Particles from "react-particles-js";
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

import profilePicture from "./images/profile-picture1.jpg";
import downarrow from "./images/down-icon.png";
import personalwebsite from "./images/personalwebsite.png";
import chatbot from "./images/chatbot.png";
import porododge from "./images/poroDodge.png";
import musicboi from "./images/musicboi.png";
import stockfindar from "./images/stock-findar.PNG";
import essayboi from "./images/essayboi.PNG";
import vetricle from "./images/vetricle.PNG";
import pathogym from "./images/pathogym.PNG";
import spacex from "./images/spacex.PNG";
import photostack from "./images/photostack.PNG";
import financeboi from "./images/financeboi.PNG";
import appointmate from './images/appointmate.PNG'
import mysafestay from './images/mysafestay.PNG';
import reggora from './images/experiences/reggora.png'
import visiblesystems from './images/experiences/visiblesystems.png'
import biotake from './images/experiences/biotake.PNG'
import wentworth from './images/experiences/wentworth.png'
import lmh from './images/experiences/lmheavy.jpg'
import bhs from './images/experiences/bhs.png'
import mlh from './images/experiences/mlh.png'
import dunkin from './images/experiences/dunkin.png'

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
  age = function() {
    var dateString = "1997/07/24";
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  render() {
    var d = new Date();
    const experience = "EXPERIENCE".split("");
    const projects = "PROJECTS".split("");
    const contact = "CONTACT".split("");
    const computerEngineer = "COMPUTER ENGINEER".split("");
    return (
      <ParallaxProvider>
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
              <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}
              >
                <div className="ptext">
                  <span className="border">Halmon Lui</span>
                  <p className="border trans">Full Stack Developer</p>

                  <img
                    className="toProfile"
                    onClick={this.profile}
                    src={downarrow}
                    alt="V"
                  />
                </div>
              </CSSTransitionGroup>
              <Particles
                params={{
                  particles: {
                    number: {
                      value: 300,
                      density: {
                        enable: false
                      }
                    },
                    color: {
                      value: "fff"
                    },
                    size: {
                      value: 3,
                      random: true,
                      anim: {
                        speed: 4,
                        size_min: 0.3
                      }
                    },
                    line_linked: {
                      enable: false
                    },
                    move: {
                      random: true,
                      speed: 1,
                      direction: "top",
                      out_mode: "out"
                    }
                  },
                  interactivity: {
                    events: {
                      onhover: {
                        enable: true,
                        mode: "bubble"
                      },
                      onclick: {
                        enable: true,
                        mode: "repulse"
                      }
                    },
                    modes: {
                      bubble: {
                        distance: 150,
                        duration: 2,
                        size: 5,
                        opacity: 1
                      },
                      repulse: {
                        distance: 200,
                        duration: 2
                      }
                    }
                  }
                }}
              />
            </div>
            <section className="section section-dark" id="profile">
              <h2>Profile</h2>
              <hr />
              <Parallax offsetXMax={0} offsetXMin={20}>
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
                    {this.age()}
                    <br />
                    <br />
                    <b>Location:</b> <br />
                    Greater Boston, MA
                  </p>
                </div>
                <div className="profileRight">
                  <h3>About Me</h3>
                  <p>
                    Hi I’m Halmon, a dev who enjoys working from the front-end
                    to the back-end.
                  </p>
                  <p>
                    I'm constantly cycling through new ideas be it developing an
                    app or creating a hardware hack.
                  </p>
                  <p>
                    Aside from programming, I'm a gentle bouldering addict who
                    also plays the piano.
                  </p>
                  <p>
                    If you have a question for me or want to drop me a quick
                    note, please do not hesitate to{" "}
                    <a id="getInTouch" onClick={this.contact}>
                      get in touch
                    </a>
                    .
                  </p>
                </div>
              </Parallax>
              <div className="clear" />
            </section>
            <section className="section section-light">
              <h2>Education</h2>
              <hr />
              <br />
              <Experiences
                place="Wentworth Institute of Technology"
                duration="September 2015 - August 2019"
                image={wentworth}
                title="BS Computer Engineering (Minor in Computer Science)"
                description=""
                location="Boston, MA"
              />
              <Experiences
                place="Braintree High School"
                duration="September 2011 - June 2015"
                image={bhs}
                title="High School Education"
                description=""
                location="Braintree, MA"
              />
            </section>

            <div className="pimg2">
              <div className="ptext">
                <span className={`border trans`} id={`experience`}>
                  {experience.map((letter, i) => (
                    <Parallax
                      key={`experience-${i}`}
                      offsetXMax={200 * (i - 5)}
                    >
                      {letter}
                    </Parallax>
                  ))}
                </span>
              </div>
            </div>

            <section className="section section-dark">
              <h2 id="experience">Career</h2>
              <hr />
              <Experiences
                place="Reggora"
                duration="September 2019 - Present"
                image={reggora}
                title="Full-time Full Stack Developer"
                description="Create new and improve existing front-end React.js components.
                  Develop back-end API endpoints using Python Flask with ElasticSearch.
                  Engineer efficient database migrations for MongoDB. Handle top priority tickets on the support team."
                location="Boston, MA"
                locationicon='invert'
              />
              <Experiences
                place="Visible Systems Corp"
                duration="September 2018 - September 2019"
                image={visiblesystems}
                title="Full-time Full Stack Developer Co-op"
                description="Redesign the web application by replacing existing Razor Pages with React in the ASP.NET MVC framework. Developed new functionality for the software's new release."
                location="Boston, MA"
                locationicon='invert'
              />
              <Experiences
                place="Biotake"
                duration="January 2018 - January 2020"
                image={biotake}
                title="Full Stack Research Assistant"
                description="Investigate better methods for creating a light-weight real-time big data framework. Create RESTful APIs and a NoSQL Database Model for MongoDB. Apply Machine Learning and Multi-scale Entropy to Physiobank’s ECG data. Implement communication between NGINX, Python server and the MongoDB, Express.js, React.js, Node.js (MERN) server stack to handle real-time data."
                location="Boston, MA"
                locationicon='invert'
              />
              <Experiences
                place="Electrical Lab"
                duration="September 2015 - December 2018"
                image={wentworth}
                title="Part-time Lab Assistant"
                description="Managed the inventory, set up the lab equipment, and helped students with parts that they need for their circuits. "
                location="Boston, MA"
                locationicon='invert'
              />
              <Experiences
                place="LM Heavy Civil"
                duration="May 2016 - August 2016"
                image={lmh}
                title="Full-time Estimating Intern"
                description="I did important takeoffs for upcoming civil projects which helped decide the total bid price of a new job."
                location="Quincy, MA"
                locationicon='invert'
              />
              <br />
              <br />
            </section>
            <section className="section section-light">
              <h2>Additional Experience</h2>
              <hr />
              <Experiences
                place="Hackathons (15)"
                duration="December 2017 - December 2019"
                image={mlh}
                title="Hacker"
                description="Local Hack Day 2017 Simmons, MakeHarvard 2018, MakeMIT 2018, PerkinsHacks 2018, HackHarvard 2018,
                HackWellesley 2018, BostonHacks 2018, Local Hack Day 2018 BU, MakeHarvard 2019, Hack the Heights 2019,
                Microsoft Azure AI Hacks 2019, Hack the North 2019, Pitt Challenge 2019, Hack Harvard 2019, The Square Small Business Hackathon 2020"
                location="Boston, MA"
              />
              <Experiences
                place="2019 International Conference on Security and Management (SAM'19)"
                duration="July 2019 - August 2019"
                image={biotake}
                title="Researcher, Primary Author"
                description="Presented the paper 'Security Lessons from Building a Back-End Service for Data Collection'"
                location="Las Vegas, NV"
              />
              <Experiences
                place="Dunkin' Donuts"
                duration="September 2015 - June 2018"
                image={dunkin}
                title="Part-time Employee"
                description=""
                location="Milton, MA"
              />
            </section>

            <div className="pimg3">
              <div className="ptext">
                <span className={`border trans`} id={`experience`}>
                  {projects.map((letter, i) => (
                    <Parallax key={`projects-${i}`} offsetXMax={200 * (i - 3)}>
                      {letter}
                    </Parallax>
                  ))}
                </span>
              </div>
            </div>

            <section className="section section-light">
              <a
                id="github"
                target="_blank"
                href="https://github.com/halmonlui"
              >
                <h2 id="project">github.com/halmonlui</h2>
              </a>
              <hr />
              <div className="projectsContainer">
                <Projects
                  title="MySafeStay"
                  source={mysafestay}
                  link="https://www.mysafestay.com"
                  description="Learn and analyze crime data about a neighborhood via an Airbnb/Zillow url or address"
                  tags="React.js, Flask, Python3, MongoDB, NGINX, GCP, Google Analytics, Adsense"
                />
                <Projects
                  title="AppointMate"
                  source={appointmate}
                  link="https://github.com/HalmonLui/AppointMate"
                  description="Users get to put in their availability on the app and the app will find them the nearest salons closest to their preferences"
                  tags="React.js, Flask, Python3, Square API, GCP"
                />
                <Projects
                  title="Stock FindAR"
                  source={stockfindar}
                  link="https://github.com/HalmonLui/whack_2018"
                  description="Discover what items have stocks behind it through this augmented reality application and view it on the website."
                  tags="Node.js, React.js, React Native, Flask, Python3, Serveo, Viro Media, Domain"
                />
                <Projects
                  title="Essay Boi"
                  source={essayboi}
                  link="https://github.com/HalmonLui/local_hack_day_2018"
                  description="Mobile application which takes a picture and converts hand written documents into a Google Document you can edit."
                  tags="React Native, Expo, Node.js, Google Cloud, Microsoft Azure, Serveo"
                />
                <Projects
                  title="PhotoStack"
                  source={photostack}
                  link="https://github.com/HalmonLui/hacktheheights2019"
                  description="Highly responsive decentralized social network for secure photo sharing using blockchain technology."
                  tags="React.js, Blockstack, Blockchain, Google Cloud, JavaScript, HTML5, CSS3"
                />
                <Projects
                  title="Finance Boi"
                  source={financeboi}
                  link="https://github.com/HalmonLui/msft-azure-hacks-2019"
                  description="Use algo trading combined with sentiment analysis (Twitter feeds, news sources) to trade on the market."
                  tags="Vue.js, Express.js, Firebase, Azure, Python3, Mongo Atlas, JavaScript, HTML5, CSS3"
                />
                <Projects
                  title="Music Boi"
                  source={musicboi}
                  link="https://github.com/HalmonLui/hack_harvard_2018/tree/FlaskServer"
                  description="Analyzes the sentiment of your text and transforms your words to midi music through the app, website, or chrome extension."
                  tags="React-Native, Python3, Flask, Serveo, HTML5, CSS3, Domain"
                />
                <Projects
                  title="Vetricle"
                  source={vetricle}
                  link="https://github.com/HalmonLui/boston_hacks_2018/tree/app"
                  description="Physically meet up with veterans in your area through this application. Communicate with others and register for events."
                  tags="React-Native, React.js, Python3, Flask, Serveo, Domain"
                />
                <Projects
                  title="Pathogym"
                  source={pathogym}
                  link="https://github.com/HalmonLui/perkins_hacks_2018"
                  description="Help the visually impaired around a technology infested gym. Know which machines are available at all times."
                  tags="React.js, Python3, Ngrok, Adobe Photoshop, Domain"
                />
                <Projects
                  title="Texting Chatbot"
                  source={chatbot}
                  link="https://github.com/HalmonLui/MLH-Local-Hack-Day"
                  description="Texting chatbot assists in minor daily tasks. Eg: Searching for wikipedia articles, current stock prices, etc."
                  tags="Python3, Flask, Twilio, Ngrok, Google Finance, Yahoo Finance, Wikipedia"
                />
                <Projects
                  title="SpaceX Launches"
                  source={spacex}
                  link="https://github.com/HalmonLui/spaceX-graphQL-practice"
                  description="View the successes and failures of SpaceX rocket launches."
                  tags="React.js, Node.js, Express.js, Cors, Apollo GraphQL, Bootstrap, Heroku"
                />
                <Projects
                  title="Poro Dodge"
                  source={porododge}
                  link="https://github.com/HalmonLui/Poro-Dodge"
                  description="Minigame where you play as Poro, you eat cookies to speed up, and you dodge rockets!"
                  tags="Python3, Pygame, cx_Freeze"
                />
                <Projects
                  title="Portfolio Website"
                  source={personalwebsite}
                  link="https://github.com/HalmonLui/Personal-Website"
                  description="You are here! Originally hosted on a Raspberry Pi 3 but due to bad uptimes, deployment was changed to Heroku and later a personal box. Designed and created by Halmon Lui."
                  tags="React.js, Heroku, Ngrok, Serveo, Raspberry Pi 3, Particles.js, Domain"
                />
                <div className="clear" />
              </div>
            </section>

            <div className="pimg4">
              <div className="ptext">
                <span className={`border trans`} id={`experience`}>
                  {contact.map((letter, i) => (
                    <Parallax key={`contact-${i}`} offsetXMax={200 * (i - 3)}>
                      {letter}
                    </Parallax>
                  ))}
                </span>
              </div>
            </div>

            <section className="section section-dark" id="contact">
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
      </ParallaxProvider>
    );
  }
}

export default App;
