import React, { Component } from "react";
import "./ProjectCard.css"
import {
  Card,
  CardTitle, Button
} from 'reactstrap';

export default class ProjectCard extends Component {
  handlePhaseChange = event => {
    event.preventDefault();
    this.props.project.phaseName = event.target.value;
    this.props.updateProject(this.props.projects.id);
  };
  render() {

    return (
      <div>
        <div key={this.props.project.id} className="card">
          <div className="card-body">
            <CardTitle>{this.props.project.projectName}</CardTitle>
            <p>Due Date: {this.props.project.projectDueDate}</p>
            {/* <p>{this.props.project.phaseName}</p> */}
            {/* <select
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
          </select> */}


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

            {/* {
               this.props.tasks.filter(tasks => tasks.projectName === this.props.project.projectName).map(taskFilter => {
                <Route
                  exact
                  path="/projects/:id/tasks"
                  render={props => {
                    return <Task {...props} projects={this.projects} phases={this.state.phases} task={taskFilter} key={taskFilter.id} />
                    )}}
                 />
             } */}
            <button
              onClick={() => this.props.history.push(`/projects/${this.props.project.id}/tasks`)}
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

