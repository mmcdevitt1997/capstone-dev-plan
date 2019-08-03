import React, { Component } from "react";
import  {getUserInSessionStorage} from "../../auth/UserManager"
export default class ProjectForm extends Component {
  state = {
    userId: "",
    taskName: "",
    taskDueDate: "",
    phaseId: false
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
      taskName: this.state.projectName,
      taskDueDate: this.state.taskDueDate,
      projectId:"",
      phaseId: false
    };
    this.props
      .addTask(task)
      // .then(() => this.props.history.push("/projects"));
  };
  // the new task form
  render() {

    return (
      <React.Fragment>
        <form className="taskForm">
          <div className="form-group">
            <label htmlFor="taskName">
              task
            </label>
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
            <label htmlFor="taskDueDate"> Project Due Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="dueDate"
              placeholder="Date of task"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewTask}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
