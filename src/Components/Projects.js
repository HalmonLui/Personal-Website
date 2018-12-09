import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <b className="title">{this.props.title}</b>
        <div className="projectswrapper">
          <a className="link" target="_blank" href={this.props.link}>
            <img className="image" src={this.props.source} />
          </a>
          <br />
          <p className="description">{this.props.description}</p>
          <br />
          <br />
          <p className="tags">
            <i>tags: {this.props.tags}</i>
          </p>
        </div>
        <div className="clear" />
      </div>
    );
  }
}

export default Projects;
