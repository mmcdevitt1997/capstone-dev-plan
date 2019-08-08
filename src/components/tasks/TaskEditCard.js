import React, { Component } from "react";
import TaskHandler from "../apiHandler/TaskHandler"

export default class TaskEditCard extends Component{
    state = {
         userId : "",
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

      updateCurrentTask = evt => {
        evt.preventDefault();
        const taskEdit = {
          id: this.props.match.params.id,
          userId: sessionStorage.getItem("userId"),
          taskName: this.state.taskName,
          taskDueDate: this.state.taskDueDate,
          phaseName: this.state.phaseName,
          projectName: this.state.projectName
        };
        this.props.updateTask(taskEdit).then(() => this.props.history.push("/"));
    }
        componentDidMount() {
            TaskHandler.get(this.props.match.params.id)
             .then(task => {
               console.log(task)
               this.setState({

                taskName: task.taskName,
                 taskDueDate: task.taskDueDate,
                 phaseName: task.phaseName,
                 projectName: task.projectName
               });
             });
           }


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
                  value = {this.state.taskName}
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
                  value = {this.state.taskDueDate}
                />
              </div>
              <select
                  name=""
                  id="projectName"
                  onChange={this.handleFieldChange}
                  value = {this.state.projectId}
                >
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
                  {this.props.phases.map(phase=> (
                    <option key={phase.id} id={phase.id} value={phase.id}>
                      {phase.phaseName}
                    </option>
                  ))}
                </select>

            </form>


            <button
              type="submit"
              onClick={this.updateCurrentTask}
              className="btn btn-primary"
            >
              Submit
            </button>
          </React.Fragment>
        );
      }
    }
