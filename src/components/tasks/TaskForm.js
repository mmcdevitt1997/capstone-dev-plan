import React, { Component } from "react";




export default class TaskForm extends Component {
  // constructing the for state of task
      state = {
    userId: "",
    taskName: "",
    taskDueDate: "",
    phaseName: "",
    projectName:"",

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
      phaseName: this.state.phaseName,
      projectName: this.state.projectName
    };
    this.props.addTask(task).then(this.props.history.goBack());
  };
  // the new task form
  render() {
    return (
      <React.Fragment>
        <form className="">
          <div className="">
            <label htmlFor="taskName">task</label>
            <input
              type="text"
              required
              className=""
              onChange={this.handleFieldChange}
              id="taskName"
              placeholder="Task Name"
            />
          </div>
          <div className="">
            <label htmlFor="taskDueDate">Task Due Date</label>
            <input
              type="date"
              required
              className=""
              onChange={this.handleFieldChange}
              id="taskDueDate"
              placeholder="Date of task"
            />
          </div>
          <select
              name="projectName"
              id="projectName"
              onChange={this.handleFieldChange}
              value = {this.state.projectName}
            >
              <option value="projectName">Select Project </option>
              {this.props.projects.map(project=> (
                <option key={project.id} id={project.id} value={project.projectName}>
                  {project.projectName}
                </option>
              ))}
            </select>
          <select
              name="phase"
              id="phaseName"
              onChange={this.handleFieldChange}
              value = {this.state.phaseName}
            >
              <option value="phaseName">Select where you are in your task</option>
              {this.props.phases.map(phase=> (
                <option key={phase.id} id={phase.id} value={phase.phaseName}>
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
