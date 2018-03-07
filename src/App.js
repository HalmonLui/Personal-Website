import React, { Component } from 'react';
import Experiences from './Components/Experiences';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './css/App.css';

import downarrow from './images/down-icon.png';


class App extends Component {

  openSlideMenu = function(){
    var element = document.getElementById("side-menu");
    element.style.width = "250px";
  };
  closeSlideMenu = function(){
    var element = document.getElementById("side-menu");
    element.style.width = "0px";
  };

  top = function(){
    var element = document.getElementById("top");
    var scrollIntoViewOptions = {
      behavior: "smooth",
    }
    element.scrollIntoView(scrollIntoViewOptions);
  };
  profile = function(){
    var element = document.getElementById("profile");
    var scrollIntoViewOptions = {
      behavior: "smooth",
    }
    element.scrollIntoView(scrollIntoViewOptions);
  };
  experience = function(){
    var element = document.getElementById("experience");
    var scrollIntoViewOptions = {
      behavior: "smooth",
    }
    element.scrollIntoView(scrollIntoViewOptions);
  };
  project = function(){
    var element = document.getElementById("project");
    var scrollIntoViewOptions = {
      behavior: "smooth",
    }
    element.scrollIntoView(scrollIntoViewOptions);
  };
  contact = function(){
    var element = document.getElementById("contact");
    var scrollIntoViewOptions = {
      behavior: "smooth",
    }
    element.scrollIntoView(scrollIntoViewOptions);
  };

    render() {
    var d = new Date()

    return (
      <div className="App">
        <nav className="navbar">
          <span className="open-slide">
            <p onClick={this.openSlideMenu}>
              <svg width="30" height="30">
                <path d="M0,5 30,5" stroke="#000" stroke-width="5"/>
                <path d="M0,14 30,14" stroke="#000" stroke-width="5"/>
                <path d="M0,23 30,23" stroke="#000" stroke-width="5"/>
              </svg>
            </p>
          </span>
        </nav>

        <div id="side-menu" className="side-nav">
          <p className="btn-close" onClick={this.closeSlideMenu}>&times;</p>
          <p onClick={this.top}>Welcome</p>
          <p onClick={this.profile}>Profile</p>
          <p onClick={this.experience}>Experience</p>
          <p onClick={this.project}>Projects</p>
          <p onClick={this.contact}>Contact</p>
        </div>

        <div id="main" onClick={this.closeSlideMenu}>
        <div id="top" className="pimg1">
          <div className="ptext">
            <span className="border">
              Halmon Lui
            </span>
              <p className="border trans">Computer Engineer</p>
              <img className="toProfile" onClick={this.profile} src={downarrow} alt="V"/>
          </div>
        </div>
        <section id="profile" className="section section-light">
          <h2>Profile</h2>
          <hr/>
          <div className="profileLeft">
            <img className="profilepic" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAgDuAAgAAQAAAAAAAA-5AAAAJDI4MWQyNjJkLTYxY2ItNDIxOC05YzEyLWE3NGRjODE5MDA3NQ.bin" alt="Halmon's Profile Picture"/>
            <p>
              <b>Name:</b> <br/>
              Halmon Lui <br/><br/>
              <b>Age:</b> <br/>
              20 years <br/><br/>
              <b>Location:</b> <br/>
              Greater Boston, MA
            </p>
          </div>
          <div className="profileRight">
            <h3>About Me</h3>
            <p>
            text heret here text here text here text here text here text here text here
            text heret here text here text here text here text here text here text here
            text heret here text here text here text here text here text here text here
            text heret here text here text here text here text here text here text here
            text heret here text here text here text here text here text here text here
            text heret here text here text here text here text here text here text here
            text heret here text here text here text here text here text here text here
            </p>
          </div>
          <div className="clear"></div>
        </section>

        <div id="experience" className="pimg2">
          <div className="ptext">
            <span className="border trans">
              Experience
            </span>
          </div>
        </div>

        <section className="section section-dark">

          <h2>Education</h2>
          <hr/>
          <Experiences
            place="Wentworth Institute of Technology"
            duration="September 2015 - Present"
            title="Bachelor - Computer Engineering (Minor: Computer Science)"
            description=""
            location="Boston, MA"/>
          <Experiences
            place="Braintree High School"
            duration="September 2011 - June 2015"
            title="High School Education"
            description=""
            location="Braintree, MA"/>
          <br/>
          <br/>

          <h2>Career</h2>
          <hr/>
          <Experiences
            place="Biotake"
            duration="January 2018 - Present"
            title="Full-time Research Co-op"
            description="I engineered better methods for creating a lightweight real-time big data framework. Additionally, I designed the RESTful API and Database model."
            location="Boston, MA"/>
          <Experiences
            place="Electrical Lab"
            duration="September 2015 - Present"
            title="Part-time Lab Assistant"
            description="I manage the inventory, set up the lab equipment, and help students with parts that they need for their circuits. "
            location="Boston, MA"/>
          <Experiences
            place="LM Heavy Civil"
            duration="May 2016 - August 2016"
            title="Full-time Estimating Intern"
            description="I did important takeoffs for upcoming civil projects which helped decide the total bid price of a new job."
            location="Quincy, MA"/>
          <br/>
          <br/>

          <h2>Additional Experience</h2>
          <hr/>
          <Experiences
            place="Dunkin' Donuts"
            duration="September 2015 - Present"
            title="Part-time Employee"
            description=""
            location="Milton, MA"/>
          <Experiences
            place="Hackathons"
            duration="December 2017 - Present"
            title="Hacker"
            description="Local Hack Day 2017 Simmons, MakeHarvard 2018, MakeMIT 2018"
            location="Boston, MA"/>
        </section>

        <div id="project" className="pimg3">
          <div className="ptext">
            <span className="border trans">
              Projects
            </span>
          </div>
        </div>

        <section className="section section-light">
          <h2>github.io/halmonlui</h2>
          <hr/>
          <p>
            text heret here text here text here text here text here text here text here
          </p>
        </section>

        <div id="contact" className="pimg3">
          <div className="ptext">
            <span className="border trans">
              Contact
            </span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Contact</h2>
          <hr/>
          <br/>
          <div className="ContactWrapper">
            <Contact/>
          </div>
          <br/><br/><br/>

          <footer>
          <hr/>
          <br/>
          <a className="toTop" onClick={this.top}>Back To The Top</a>
          <p><i>Copyright © {d.getFullYear()} Halmon Lui</i></p>
          </footer>

        </section>
        </div>
      </div>
    );
  }
}

export default App;
