import React, { Component } from "react";


export default class TaskCard extends Component {

  render() {

    return (
      <div key={this.props.task.id} className="card">

        <div className="card-body">

            <h5 className="card-title">{this.props.task.taskName}</h5>

          <p>Due Date: {this.props.task.taskDueDate}</p>
          <p>Project: {this.props.task.projectName}</p>
          <p>Phase: {this.props.task.phaseName}</p>
          <p>id: {this.props.task.id}</p>

          <button
            onClick={() => this.props.deleteTask(this.props.task.id)}
            className="delete-btn"
          >
            Delete
          </button>
          <button
            onClick={() => this.props.history.push("/tasks/subtask")}
            className="btn"
          >
            +
          </button>
          <button
            onClick={() => this.props.history.push(`/tasks/${this.props.task.id}/edit`)}
            className="btn"
          >
            edit
          </button>
        </div>
      </div>
    );
  }
}
