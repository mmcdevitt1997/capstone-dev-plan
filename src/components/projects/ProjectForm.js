import React, { Component } from "react";
import  {getUserInSessionStorage} from "../../auth/UserManager"
// import AutoComplete from "../autoComplete/AutoComplete"
export default class ProjectForm extends Component {
  state = {
    userId: "",
    ProjectName: "",
    dueDate: "",
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
      dueDate: this.state.dueDate,
      phaseId: false
    };
    this.props
      .addProject(project)
      // .then(() => this.props.history.push("/projects"));
  };
  // the new task form
  render() {
    console.log("i have rendered")
    return (
      <React.Fragment>
        <form className="projectForm">
          <div className="form-group">
            <label htmlFor="projectName">
              Enter the name of your project repo
            </label>
            {/* <AutoComplete {...this.props} /> */}
          </div>
          <div className="form-group">
            <label htmlFor="dueDate"> Project Due Date</label>
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
