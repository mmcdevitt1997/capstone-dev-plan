import React, { Component } from "react";
import "./ProjectCard.css"
import { Card,
  CardTitle, Button } from 'reactstrap';

export default class ProjectCard extends Component {
   handlePhaseChange = event => {
    event.preventDefault();
    this.props.project.phaseName = event.target.value;
    this.props.updateProject(this.props.projects);
  };
  render() {

    return (
      <Card>
      <div key={this.props.project.id} className="card">

        <div className="card-body">

            <CardTitle>{this.props.project.projectName}</CardTitle>
          <p>Due Date: {this.props.project.projectDueDate}</p>
          <select
            name="phase"
            id="phaseName"
            onChange={this.handlePhaseChange}
            value={this.phaseName}
          >
            <option value="phaseName">{this.props.project.phaseName}</option>
            {this.props.phases.map(phase => (
              <option key={phase.id} id={phase.id} value={phase.phaseName}>
                {phase.phaseName}
              </option>
            ))}
          </select>


          <button
            onClick={() => this.props.deleteProject(this.props.project.id)}
            className="delete-btn"
          >
            Delete
          </button>
          <Button
            onClick={() => this.props.deleteProject(this.props.project.id)}
            className="btn"
          >
            Edit
          </Button>
          <button
            onClick={() => this.props.history.push(`/projects/${this.props.project.id}/tickets`)
            }
            className="btn"
          >
            tickets
          </button>
          <button
            onClick={() => this.props.deleteProject(this.props.project.id)}
            className="btn"
          >
            Task Page
          </button>
        </div>

      </div>
      </Card>
    );
  }
}
