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

          userId: sessionStorage.getItem("userId"),
          taskName: this.state.taskName,
          taskDueDate: this.state.taskDueDate,
          phaseName: this.state.phaseId,
          projectName: this.state.projectName
        };
        this.props.updateTask(taskEdit).then(() => this.props.history.push("/tasks"));
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
            <form className="taskForm">
              <div className="form-group">
                <label htmlFor="taskName">task</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="taskName"
                  placeholder="Task Name"
                  value = {this.state.taskName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="taskDueDate">Task Due Date</label>
                <input
                  type="date"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="taskDueDate"
                  placeholder="Date of task"
                  value = {this.state.taskDueDate}
                />
              </div>
              <select
                  name="projectId"
                  id="projectName"
                  onChange={this.handleFieldChange}
                  value = {this.state.projectId}
                >
                  <option value="projectName">Select Project </option>
                  {this.props.projects.map(project=> (
                    <option key={project.id} id={project.id} value={project.projectName}>
                      {project.projectName}
                    </option>
                  ))}
                </select>
              <select
                  name="phase"
                  id="phaseId"
                  onChange={this.handleFieldChange}
                  value = {this.state.phaseName}
                >
                  <option value="phaseId">Select where you are in your task</option>
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
