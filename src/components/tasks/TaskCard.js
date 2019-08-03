import React, { Component } from "react";


export default class TaskCard extends Component {

  render() {

    return (
      <div key={this.props.task.id} className="card">

        <div className="card-body">

            <h5 className="card-title">{this.props.task.taskName}</h5>

          <p>Due Date: {this.props.task.taskDueDate}</p>

          <button
            // onClick={() => this.props.deleteProject(this.props.project.id)}
            className="delete-btn"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
