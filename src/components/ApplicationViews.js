import { Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";
// import { addProject } from "./FetchCalls";
import Project from "./projects/Project";
import Task from "./tasks/Task";
import ProjectForm from "./projects/ProjectForm"
import ProjectHandler from "./apiHandler/ProjectHandler"
import UserHandler from "./apiHandler/UserHandler"
import AutoComplete from "./autoComplete/AutoComplete";


class ApplicationViews extends Component {
  state = {
    users: [],
    projects: [],
    tasks: [],
    teams: [],
    tickets: [],
    teamUsers: [],
    suggestions: []
  };
  componentDidMount() {
    UserHandler.getAll()
      .then(users => this.setState({ users: users }))
      .then(() => ProjectHandler.getAll())
      .then (projects => {
        this.setState({projects:projects})
      })
    }

  addProject = (project) => {
    ProjectHandler.post(project)
      .then(() => ProjectHandler.getAll())
      .then(projects => {
        this.setState({ projects: projects })
      })
  }
  deleteProject = id => {
    ProjectHandler.delete(id)
    .then(() => ProjectHandler.getAll())
    .then (projects => {
      this.setState({projects:projects})
    })
  }

  isAuthenticated = () => sessionStorage.getItem("id") !== null;

  render() {
    return (
      <React.Fragment>
        <div>
          <Route
            exact
            path="/"
            render={props => {
              return null;
            }}
          />
          <Route
            path="/tasks"
            render={props => {
            return <Task tasks={this.state.tasks} />
            }}
          />
          <Route
            exact
            path="/projects/new"
            render={props => {
              return (
                <ProjectForm {...props} addProject={this.addProject} />
              );
            }}
          />
          <Route
            exact
            path="/projects"
            render={props => {
              console.log(this.state.projects)
              return <Project {...props} projects={this.state.projects} deleteProject={this.deleteProject} />
            }}
          />

        </div>
      </React.Fragment>
    )
          }

      }

export default ApplicationViews;
