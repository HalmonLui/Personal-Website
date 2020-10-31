import React, { Component } from 'react';
import locationicon from '../images/locationicon.png';
class Experiences extends Component {
  render() {
    return(
      <div className="experiences">
        <div className="experienceLeft">
          <img className="logo" src={this.props.image} />
          <div className="text-container">
            <p><b className="place">{this.props.place}</b></p>
            <p className="duration"><i>{this.props.duration}</i></p>
          </div>
        </div>
        <div className="experienceRight">
          <b className="title">{this.props.title}</b>
          <p className="description">{this.props.description}</p>
          <p className="location"><img className={this.props.locationicon} src={locationicon} alt="location icon"/> {this.props.location}</p>
        </div>
        <div className="clear"></div>
        <br/>
      </div>
    );
  }
}

export default Experiences;
