import React, { Component } from 'react';
import locationicon from '../images/locationicon.png';
class Experiences extends Component {
  render() {
    return(
      <div className="experiences">
        <div className="experienceLeft">
          <b className="place">{this.props.place}</b>
          <p className="duration">{this.props.duration}</p>
        </div>
        <div className="experienceRight">
          <b className="title">{this.props.title}</b>
          <p className="description">{this.props.description}</p>
          <p className="location"><img src={locationicon} alt="location icon"/> {this.props.location}</p>
        </div>
        <div className="clear"></div>
        <br/>
      </div>
    );
  }
}

export default Experiences;
