import React, { Component } from "react";
import {

  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle


} from 'reactstrap'

export default class TaskForm extends Component {
  state = {
    userId: "",
    taskName: "",
    taskDueDate: "",
    phase: "todo",
    taskId: null,
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleDropDown = evt => {
    const stateToChange = {}
    if (evt.target.value === "currentTask"){
      this.setState({phase: "currentTask"})
    }else if (evt.target.value === "done"){
      this.setState ({phase: "done"})
    }else{(evt.target.value = "todo")}
      this.setState ({phase: "todo"})

      stateToChange[evt.target.id] = evt.target.value;
      this.setState(stateToChange)

    }

    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }


  constructNewTask = evt => {
    evt.preventDefault();
    const task = {
      userId: sessionStorage.getItem("userId"),
      taskName: this.state.taskName,
      taskDueDate: this.state.taskDueDate,
      phase: this.state.taskPhase,
      taskId: null,
    }
    this.props
      .addTask(task)
      .then(() => this.props.history.push("/tasks"));
  };
  // the new task form
  render() {

    return (
      <React.Fragment>
        <form className="taskForm">
          <div className="form-group">
            <label htmlFor="taskName">
              task
            </label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="taskName"
              placeholder="Task Name"
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
            />
          </div>
          <div>
           <Dropdown>
          <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
               name = "phase"
              type="select"
              required
              className="form-control"
              onChange={this.handleDropDown}
              id="taskPhase"
            />
              <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
             <DropdownMenu>
            <DropdownItem value ="todo">To Do</DropdownItem>
            <DropdownItem value ="currentTask"> Current Task</DropdownItem>
            <DropdownItem value = "done">Done</DropdownItem >
            </DropdownMenu>
            </Dropdown>
            </div>

          <button
            type="submit"
            onClick={this.constructNewTask}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
