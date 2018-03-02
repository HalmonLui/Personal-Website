import React, { Component } from 'react';
import Experiences from './Components/Experiences';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="pimg1">
          <div className="ptext">
            <span className="border">
              Halmon Lui
            </span>
              <p className="border trans">Computer Engineer</p>
          </div>
        </div>

        <section className="section section-light">
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

        <div className="pimg2">
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
//          description="text here text here text here text here"
            location="Boston, MA"/>
          <Experiences
            place="Braintree High School"
            duration="September 2011 - June 2015"
            title="High School Education"
//          description="text here text here text here text here"
            location="Braintree, MA"/>
          <br/>
          <br/>

          <h2>Career</h2>
          <hr/>
          <Experiences
            place="Biotake"
            duration="January 2018 - Present"
            title="Fulltime Research Co-op"
            description="text here text here text here text here"
            location="Boston, MA"/>
          <Experiences
            place="Electrical Lab"
            duration="September 2015 - Present"
            title="Part-time Lab Assistant"
            description="text here text here text here text here"
            location="Boston, MA"/>
          <Experiences
            place="LM Heavy Civil"
            duration="May 2016 - August 2016"
            title="Fulltime Estimating Intern"
            description="text here text here text here text here"
            location="Quincy, MA"/>
          <br/>
          <br/>

          <h2>Additional Experience</h2>
          <hr/>
          <Experiences
            place="Dunkin' Donuts"
            duration="September 2015 - Present"
            title="Part-time Employee"
            description="text here text here text here text here"
            location="Milton, MA"/>
          <Experiences
            place="Hackathons"
            duration="December 2017 - Present"
            title="Hacker"
            description="Local Hack Day 2017 Simmons, MakeHarvard 2018, MakeMIT 2018"
            location="Boston, MA"/>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border trans">
              Projects
            </span>
          </div>
        </div>

        <section className="section section-light">
          <h2>github.io/halmonlui</h2>
          <p>
            text heret here text here text here text here text here text here text here
          </p>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border trans">
              Contact
            </span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Contact</h2>
          <hr/>
          <Contact/>
          <p>
            text heret here text here text here text here text here text here text here
          </p>
        </section>
      </div>
    );
  }
}

export default App;
