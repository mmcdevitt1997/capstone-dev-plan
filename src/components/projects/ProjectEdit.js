import React, { Component } from "react";
import ProjectHandler from "../apiHandler/ProjectHandler"


export default class ProjectEdit extends Component{
state = {
    userId :"",
    projectName:"",
    projectDueDate:"",
    phaseName: ""
}

handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  updateCurrentProject= evt => {
    evt.preventDefault();
    const projectEdit = {
      id: this.props.match.params.id,
      userId: sessionStorage.getItem("userId"),
      projectName: this.state.projectName,
      projectDueDate: this.state.projectDueDate,
      phaseName: this.state.phaseName,
    };
    this.props.updateProject(projectEdit).then(() => this.props.history.push("/projects"));
}
componentDidMount() {
    ProjectHandler.get(this.props.match.params.id)
     .then(project => {
       this.setState({
        id: this.props.match.params.id,
        projectName: project.projectName,
         projectDueDate: project.projectDueDate,
         phaseName: project.phaseName,
       });
     });
   }

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
              value = {this.state.projectDueDate}
            />
          </div>
          {/* <select
              name="phase"
              id="phaseName"
              onChange={this.handleFieldChange}
              value = {this.state.phaseName}
            >

              {this.props.phases.map(phase=> (
                <option key={phase.id} id={phase.id} value={phase.phaseName}>
                  {phase.phaseName}
                </option>
              ))}
            </select> */}
          <button
            type="submit"
            onClick={this.updateCurrentProject}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>

    )
  }
}