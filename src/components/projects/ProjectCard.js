import React, { Component } from "react";




export default class ProjectCard extends Component {

  render() {

    return (
      <div key={this.props.project.id} className="card">

        <div className="card-body">

            <h5 className="card-title">{this.props.task.projectName}</h5>

          <p>Due Date: {this.props.project.dueDate}</p>

          <button
            onClick={() => this.props.deleteProject(this.props.project.id)}
            className="delete-btn"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
