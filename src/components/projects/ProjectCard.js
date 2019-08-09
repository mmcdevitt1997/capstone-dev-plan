import React, { Component } from "react";
import "./ProjectCard.css"
import {
  CardTitle
} from 'reactstrap';

export default class ProjectCard extends Component {
  handleProjectPhaseChange = event => {
    event.preventDefault();
    this.props.project.phaseName = event.target.value;
    this.props.updateProject(this.props.projects);
  };
  render() {

    return (
      <div>
        <div key={this.props.project.id} className="card">
          <div className="card-body">
            <CardTitle>{this.props.project.projectName}</CardTitle>
            <p>Due Date: {this.props.project.projectDueDate}</p>
            <button
              onClick={() => this.props.deleteProject(this.props.project.id)}
              className="delete-btn"
            >
              Delete
          </button>
            <button
              onClick={() => this.props.history.push(`projects/${this.props.project.id}/edit`)}
              className="btn"
            >
              Edit
          </button>
            <button
              onClick={() => this.props.history.push(`/projects/${this.props.project.id}/tickets`)
              }
              className="btn"
            >
              Tickets
          </button>
            <button
              onClick={() => this.props.history.push(`/projects/${this.props.project.projectName}/tasks`)}
              className="btn"
            >
              Task Page
          </button>
          </div>
        </div>
      </div>
    )
  }
}

