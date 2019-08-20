import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  Label
} from 'reactstrap';



export default class TaskForm extends Component {
  // constructing the for state of task
      state = {
    userId: "",
    taskName: "",
    taskDueDate: "",
    phaseName: "",
    projectName:"",

  };
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      userId: "",
      taskName: "",
      taskDueDate: "",
      phaseName: "",
      projectName:"",

    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
      userId: "",
      taskName: "",
      taskDueDate: "",
      phaseName: "",
      projectName:"",
    }));
  }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };


  constructNewTask = evt => {
    evt.preventDefault();
    const task = {
      userId: sessionStorage.getItem("userId"),
      taskName: this.state.taskName,
      taskDueDate: this.state.taskDueDate,
      phaseName: this.state.phaseName,
      projectName: this.state.projectName
    };
    this.toggle()
    this.props.addTask(task)
  };
  // the new task form
  render() {
    return (
      <React.Fragment>
         <Button  onClick={this.toggle}>Add Task</Button>
         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
         <ModalHeader>Add Task</ModalHeader>
         <ModalBody>
        <Form>

          <div>
            <Label  className="black" htmlFor="taskName">Task: </Label>
            <Input
              type="text"
              required
              className="black"
              onChange={this.handleFieldChange}
              id="taskName"
              placeholder="Task Name"
            />
          </div>
          <div className="">
            <Label  className="black" htmlFor="taskDueDate">Task Due Date: </Label>
            <Input
              type="date"
              required
              className=""
              onChange={this.handleFieldChange}
              id="taskDueDate"
              placeholder="Date of task"
            />
          </div>
          <select
              name="projectName"
              id="projectName"
              onChange={this.handleFieldChange}
              value = {this.state.projectName}
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
              id="phaseName"
              onChange={this.handleFieldChange}
              value = {this.state.phaseName}
            >
              <option value="phaseName">Select where you are in your task</option>
              {this.props.phases.map(phase=> (
                <option key={phase.id} id={phase.id} value={phase.phaseName}>
                  {phase.phaseName}
                </option>
              ))}
            </select>

        </Form>

        <ModalFooter>
        <Button
          type="submit"
          onClick={this.constructNewTask}
          className="btn btn-primary"
        >{''}
          Submit
        </Button>
        <Button
        onClick={this.toggle}
        color="secondary"
        >
         Cancel
        </Button>

        </ModalFooter>
        </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
