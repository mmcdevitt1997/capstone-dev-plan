import React, { Component } from "react";

export default class TaskForm extends Component {
  // constructing the for state of task
      state = {
    userId: "",
    taskName: "",
    taskDueDate: "",
    phaseId: 1,
    projectId:"",

  };





  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };


  constructNewTask = evt => {
    evt.preventDefault();
    const task = {

      userId: sessionStorage.getItem("userId"),
      taskName: this.state.taskName,
      taskDueDate: this.state.taskDueDate,
      phaseId: this.state.phaseId,
      projectId: this.state.projectId
    };
    this.props.addTask(task).then(() => this.props.history.push("/tasks"));
  };
  // the new task form
  render() {
    return (
      <React.Fragment>
        <form className="taskForm">
          <div className="form-group">
            <label htmlFor="taskName">task</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="taskName"
              placeholder="Task Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="taskDueDate">Task Due Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="taskDueDate"
              placeholder="Date of task"
            />
          </div>
          <select
              name="projectId"
              id="projectId"
              onChange={this.handleFieldChange}
              value = {this.state.projectId}
            >
              <option value="projectId">Select Project </option>
              {this.props.projects.map(project=> (
                <option key={project.id} id={project.id} value={project.id}>
                  {project.projectName}
                </option>
              ))}
            </select>
          <select
              name="phase"
              id="phaseId"
              onChange={this.handleFieldChange}
              value = {this.state.phaseId}
            >
              <option value="phaseId">Select where you are in your task</option>
              {this.props.phases.map(phase=> (
                <option key={phase.id} id={phase.id} value={phase.id}>
                  {phase.phaseName}
                </option>
              ))}
            </select>

        </form>


        <button
          type="submit"
          onClick={this.constructNewTask}
          className="btn btn-primary"
        >
          Submit
        </button>
      </React.Fragment>
    );
  }
}
