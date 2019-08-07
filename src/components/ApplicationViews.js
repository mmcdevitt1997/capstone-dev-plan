import { Route, BrowserRouter as Router , withRouter } from "react-router-dom";
import React, { Component } from "react";
import Project from "./projects/Project";
import Task from "./tasks/Task";
import ProjectForm from "./projects/ProjectForm"
import ProjectHandler from "./apiHandler/ProjectHandler"
import UserHandler from "./apiHandler/UserHandler"
import TaskHandler from "./apiHandler/TaskHandler"
import TaskForm from "./tasks/TaskForm"
import PhaseHandler from "./apiHandler/PhaseHandler"
import getReposGithub from "./githubAPI/getReposGithub"
import TaskEditCard from "./tasks/TaskEditCard"
import SubTaskHandler from "./apiHandler/SubTaskHandler"
import Ticket from "./projects/ticket-page /Ticket"
import ProjectEdit from "./projects/ProjectEdit"



class ApplicationViews extends Component {
  state = {
    users: [],
    projects: [],
    phases:[],
    tasks: [],
    teams: [],
    teamUsers: [],
    gitRepos: [],
    subTask: []

  };
  componentDidMount() {
    UserHandler.getAll()
      .then(users => this.setState({ users: users }))
      .then(() => ProjectHandler.getAll())
      .then (projects => {
        this.setState({projects:projects})
      })
       .then(() => TaskHandler.getAll())
       .then (tasks => {
        this.setState({tasks:tasks})
      })
      .then(() => PhaseHandler.getAll())
       .then (phases => {
        this.setState({phases:phases})
      })
      .then(() => getReposGithub.getRepos())
      .then (gitRepos => {
       this.setState({gitRepos:gitRepos})
     })
     .then(() => SubTaskHandler.getAll())
      .then (subTasks => {
       this.setState({subTasks:subTasks})
     })
  }

  updateProject = editProject=>
    ProjectHandler.put(editProject)
      .then(() => Project.getAll())
      .then(projects =>
        this.setState({
           projects: projects
        })
      )


  addTask = (task) =>
    TaskHandler.post(task)
      .then(() => TaskHandler.getAll())
      .then(tasks =>
        this.setState({ tasks:tasks })
      )

  deleteTask = id => {
    TaskHandler.delete(id)
    .then(() => TaskHandler.getAll())
    .then (tasks => {
      this.setState({tasks:tasks})
    })
  }

  updateTask = task =>
    TaskHandler.put(task)
      .then(() => TaskHandler.getAll())
      .then(tasks => {
        this.setState({
          tasks: tasks
        });
      });


  addProject = project =>
    ProjectHandler.post(project)
      .then(() => ProjectHandler.getAll())
      .then(projects =>
        this.setState({ projects: projects })
      )


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
           exact
            path="/tasks"
            render={props => {
            return <Task {...props} tasks={this.state.tasks} phases={this.state.phases} deleteTask={this.deleteTask}  updateTask ={this.updateTask} />
            }}
          />
          <Route
            exact
            path="/tasks/new"
            render={props => {
            return <TaskForm phases={this.state.phases} {...props} addTask={this.addTask} projects={this.state.projects}/>
            }}
          />
          <Route
            exact
            path="/projects/new"
            render={props => {
              return (
                <ProjectForm {...props} gitRepos={this.state.gitRepos} phases={this.state.phases} addProject={this.addProject} />
              );
            }}
          />
          <Route
            exact
            path="/projects"
            render={props => {
              return <Project {...props} projects={this.state.projects} deleteProject={this.deleteProject} />
            }}
          />
          <Route
            exact
            path="/projects/:id/tickets"
            render={props => {

              return <Ticket {...props} projects={this.state.projects} />
            }}
            />
            <Route
            exact
            path="/projects/:id/edit"
            render={props => {
              return <ProjectEdit {...props} projects={this.projects} updateProject= {this.updateProject} />
            }}
          />

           <Route
             exact
             path="/tasks/:taskId/edit"
            render={props => {
               return <TaskEditCard {...props} tasks={this.state.tasks} phases={this.state.phases} projects={this.state.projects} updateTask={this.updateTask}  />
             }}
           />


        </div>
      </React.Fragment>
    )
          }

      }

      export default withRouter(ApplicationViews);