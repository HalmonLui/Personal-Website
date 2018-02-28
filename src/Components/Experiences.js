import React, { Component } from 'react';
class Experiences extends Component {
  render() {
    return(
      <div className="experiences">
        <div className="experienceLeft">
          <h3 className="place">{this.props.place}</h3>
          <p className="duration">{this.props.duration}</p>
        </div>
        <div className="experienceRight">
          <b className="title">{this.props.title}</b>
          <p className="description">{this.props.description}</p>
          <img src="https://lh3.google.com/u/0/d/1N6D3_zuAm5K7YuxI16wSohRzSVRhOkTV=w32-h32-p-k-nu-iv1"/>
          <p className="location">{this.props.location}</p>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

export default Experiences;
