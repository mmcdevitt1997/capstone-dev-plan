import React, { Component } from "react";
import { thisExpression } from "@babel/types";


export default class TaskCard extends Component {

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handlePhaseChange = event => {
    event.preventDefault()
    this.props.task.phaseName = event.target.value;
    this.props.updateTask(this.props.task)
  }

  render() {

    return (
      <div key={this.props.task.id} className="">

        <div className="">

            <h5 className="card-title">{this.props.task.taskName}</h5>

          <p>Due Date: {this.props.task.taskDueDate}</p>
          <p>Project: {this.props.task.projectName}</p>
          <p>{this.props.task.phaseName}</p>
          <select
              name="phase"
              id="phaseName"
              onChange={this.handlePhaseChange}
              value = {this.phaseName}
            >
              <option value="phaseName">{this.props.task.phaseName}</option>
              {this.props.phases.map(phase=> (
                <option key={phase.id} id={phase.id} value={phase.phaseName}>
                  {phase.phaseName}
                </option>
              ))}
            </select>
          <p>id: {this.props.task.id}</p>

          <button
            onClick={() => this.props.deleteTask(this.props.task.id)}
            className="btn"
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
