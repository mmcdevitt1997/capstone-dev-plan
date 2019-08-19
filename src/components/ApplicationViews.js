// eslint-disable-next-line
import { Route, BrowserRouter as Router , withRouter, Redirect  } from "react-router-dom";
import React, { Component } from "react";
import Project from "./projects/Project";
import Task from "./tasks/Task";
import ProjectHandler from "./apiHandler/ProjectHandler"
import UserHandler from "./apiHandler/UserHandler"
import TaskHandler from "./apiHandler/TaskHandler"
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
        this.setState({projects: projects})
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
      .then(() => ProjectHandler.getAll())
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
  patchProject = (edit, id) => {
    ProjectHandler.patch(edit, id)
    .then(() => ProjectHandler.getAll())
    .then (projects => {
      this.setState({projects:projects})
    })
  }
  patchTask= (edit, id) => {
    TaskHandler.patch(edit, id)
    .then(() => TaskHandler.getAll())
    .then (tasks => {
      this.setState({tasks:tasks})
    })
  }


  isAuthenticated = () => sessionStorage.getItem("userId") !== null;

  render() {
    return (
      <React.Fragment>
        <div>

          <Route
           exact
            path="/"
            render={props => {
              if (this.isAuthenticated()) {
            return <Task {...props} tasks={this.state.tasks} projects={this.state.projects} phases={this.state.phases} deleteTask={this.deleteTask}  updateTask ={this.updateTask}  addTask={this.addTask} />
          } else {
            return <Redirect to="/login" />;
              }
            }}
          />
          <Route
            exact
            path="/projects"
            render={props => {
              if (this.isAuthenticated()) {
              return <Project {...props} projects={this.state.projects} gitRepos={this.state.gitRepos} deleteProject={this.deleteProject} updateProject={this.updateProject} phases={this.state.phases} addProject={this.addProject} />
            } else {
              return <Redirect to="/login" />;
                }
            }}
          />
          <Route
            exact
            path="/projects/:id/tickets"
            render={props => {
              if (this.isAuthenticated()) {
              return <Ticket {...props} projects={this.state.projects} tasks={this.state.tasks} phases={this.state.phases} addTask={this.addTask}/>
            } else {
              return <Redirect to="/login" />;
                }
            }}
            />

            <Route
            exact
            path="/projects/:id/edit"
            render={props => {
              if (this.isAuthenticated()) {
              return <ProjectEdit gitRepos={this.state.gitRepos} {...props} projects={this.projects} phases={this.state.phases} updateProject= {this.updateProject}   patchProject= {this.patchProject} />
            } else {
              return <Redirect to="/login" />;
                }
            }}
          />
           <Route
            exact
            path="/projects/:projectName/tasks"
            render={props => {
              console.log(this.state.tasks)
             let projectTask =''
             if (this.isAuthenticated()) {
               projectTask = this.state.tasks.filter(task =>
                task.projectName === (props.match.params.projectName)
                )
           return(<Task {...props}  tasks={projectTask} projects={this.state.projects} phases={this.state.phases} deleteTask={this.deleteTask} updateProject={this.updateProject} updateTask ={this.updateTask} addTask ={this.addTask}/>)

            } else {
              return <Redirect to="/login" />;
                }
            }}
          />

           <Route
             exact
             path="/tasks/:id/edit"
            render={props => {
              if (this.isAuthenticated()) {
               return <TaskEditCard {...props} tasks={this.state.tasks} phases={this.state.phases} projects={this.state.projects} updateTask={this.updateTask}  />
              } else {
                return <Redirect to="/login" />;
                  }
             }}
           />


        </div>
      </React.Fragment>
    )
          }

      }

      export default withRouter(ApplicationViews);