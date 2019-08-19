import React, { Component } from "react";
import TaskHandler from "../apiHandler/TaskHandler"
import {
  Button,
  FormGroup,
  Form,
  Label
} from 'reactstrap';



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
            <Form>
              <FormGroup>
                <Label htmlFor="taskName">Task Name: </Label>
                <input
                  type="text"
                  required
                  onChange={this.handleFieldChange}
                  id="taskName"
                  placeholder="Task Name"
                  value = {this.state.taskName}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="taskDueDate">Task Due Date:</Label>
                <input
                  type="date"
                  required
                  onChange={this.handleFieldChange}
                  id="taskDueDate"
                  placeholder="Date of task"
                  value = {this.state.taskDueDate}
                />
              </FormGroup>
              <FormGroup>
              <Label htmlFor="projectName">Project Name:</Label>
              <select

                  id="projectName"
                  onChange={this.handleFieldChange}
                  value = {this.state.projectName}
                >
                  {this.props.projects.map(project=> (
                    <option key={project.id} id={project.id} value={project.projectName}>
                      {project.projectName}
                    </option>
                  ))}
                </select>
                </FormGroup>
                <FormGroup>
                <Label htmlFor="phaseName">Task Phase:</Label>
              <select
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
                </select>
                </FormGroup>

                </Form>
            <Button
              onClick={this.updateCurrentTask}
              className = "submit"
            >
              Submit
            </Button>

          </React.Fragment>
        );
      }
    }
