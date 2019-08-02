import { Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";
// import { addProject } from "./FetchCalls";
import Project from "./projects/Project";
import ProjectForm from "./projects/ProjectForm"
import ProjectHandler from "./apiHandler/ProjectHandler"
import UserHandler from "./apiHandler/UserHandler"

class ApplicationViews extends Component {
  state = {
    users: [],
    projects: [],
    tasks: [],
    teams: [],
    tickets: [],
    teamUsers: []
  };
  componentDidMount() {
    UserHandler.getAll()
      .then(users => this.setState({ users: users }))
      .then(() => ProjectHandler.getAll())
      .then (projects => {
        console.log(projects)
      })
    }
    //  .then(Object.values(projectData)) => this.setSate({projects: projects}))

    //  .then( projects => this.setState({projects: projects}))
    // .then(() => MessageHandler.getAll())
    // .then(messages => {
    //   let newMessages = messages.sort((a, b) => a.timestamp - b.timestamp);
    //   this.setState({ messages: newMessages });
    // });


  // addProject(projects);
  addProject = (project) => {
    ProjectHandler.post(project)
      .then(() => ProjectHandler.getAll())
      .then(projects => {
        this.setState({ projects: projects })
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
              return null;
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
              return <Project {...props} projects={this.state.projects} />
            }}
          />

        </div>
      </React.Fragment>
    )
          }

      }

export default ApplicationViews;
