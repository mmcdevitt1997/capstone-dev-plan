import React, { Component } from "react";
import Dropdown from "reactstrap/lib/Dropdown";
// import AutoComplete from "../autoComplete/AutoComplete"
export default class ProjectForm extends Component {
  state = {
    userId: "",
    projectName: "",
    projectDueDate: "",
    phaseName: ""
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
      phaseName: this.state.phaseName
    };
    this.props.addProject(project).then(() => this.props.history.push("/projects"));
  };
  // the new task form
  render() {
    return (
      <React.Fragment>
        <form className="">
          <div className="">
            <label htmlFor="projectName">
              Enter the name of your project repo
            </label>
            <select
              name="projectName"
              id="projectName"
              onChange={this.handleFieldChange}
              value = {this.state.projectName}
            >
              <option >Select Repo</option>
              {this.props.gitRepos.map(gitRepo=> (
                <option key={gitRepo.id} id={gitRepo.id} value={gitRepo.name}>
                    {gitRepo.name}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <label htmlFor="projectDueDate"> Project Due Date</label>
            <input
              type="date"
              required
              className=""
              onChange={this.handleFieldChange}
              id="projectDueDate"
              placeholder="Date of project"
            />
          </div>
          <select
              name="phase"
              id="phaseName"
              onChange={this.handleFieldChange}
              value = {this.state.phaseName}
            >
              <option value="phaseName">Select where you are in your project</option>
              {this.props.phases.map(phase=> (
                <option key={phase.id} id={phase.id} value={phase.phaseName}>
                  {phase.phaseName}
                </option>
              ))}
            </select>
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
