import React, { Component } from 'react';
import Experiences from './Components/Experiences';
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
            <img className="profilepic" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAgDuAAgAAQAAAAAAAA-5AAAAJDI4MWQyNjJkLTYxY2ItNDIxOC05YzEyLWE3NGRjODE5MDA3NQ.bin"/>
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
              Experiences
            </span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Experiences</h2>
          <hr/>
          <Experiences
            place="Wentworth Institute of Technology"
            duration="09/2015 - Present"
            title="Bachelor - Computer Engineering (Minor: Computer Science)"
            description="text here text here text here text here"
            location="Boston, MA"/>
          <p>
            text heret here text here text here text here text here text here text here
          </p>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border trans">
              Image Three Text
            </span>
          </div>
        </div>

        <section className="section section-light">
          <h2>Section Three</h2>
          <p>
            text heret here text here text here text here text here text here text here
          </p>
        </section>

      </div>
    );
  }
}

export default App;
