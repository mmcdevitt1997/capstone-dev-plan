import React, { Component } from "react";
import Dropdown from "reactstrap/lib/Dropdown";
// import AutoComplete from "../autoComplete/AutoComplete"
export default class ProjectForm extends Component {
  state = {
    userId: "",
    projectName: "",
    projectDueDate: "",
    PhaseId: false
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };


  constructNewProject = evt => {
    evt.preventDefault();
    const project = {
      userId: sessionStorage.getItem("userId"),
      projectName: this.state.projectName,
      projectDueDate: this.state.projectDueDate,
      phaseId: false
    };
    this.props.addProject(project).then(() => this.props.history.push("/projects"));
  };
  // the new task form
  render() {


    return (
      <React.Fragment>
        <form className="projectForm">
          <div className="form-group">
            <label htmlFor="projectName">
              Enter the name of your project repo
            </label>
            <Dropdown
             list={this.state.location}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dueDate"> Project Due Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="ProjectDueDate"
              placeholder="Date of task"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewProject}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
