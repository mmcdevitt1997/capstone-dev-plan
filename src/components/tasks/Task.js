import React, { Component } from "react";
import TasksToDo from "./TaskToDo";
import TasksCurrent from "./TasksCurrent";
import TaskPhaseDone from "./TasksPhaseDone";

export default class Task extends Component {
  render() {
    console.log(this.props.tasks);

    return (
      <div>
        <h1 className="title">Task Page</h1>
        <div className="AddTaskButton">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/tasks/new");
            }}
          >
            Add Task
          </button>
        </div>
        <div className="parent-Dash-Div">
          <div className="dashboard-row">
            <div className="dashboard-div-box">
              <h3>To Do</h3>
              <div className="dashboard-div">
                {this.props.tasks.filter(task => (
                  <div className="dashboard-div">
                    <TasksToDo
                      task={task.props.phase === "todo"}
                      {...this.props}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="dashboard-div-box">
              <h3>Currently Working On</h3>
              {this.props.tasks.filter(task => (
                <div className="dashboard-div">
                  <TasksCurrent
                    task={task.props.phase === "currentTask"}
                    {...this.props}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="dashboard-div-box">
            <h3>Finished Tasks </h3>
            <div className="dashboard-div">
              {this.props.tasks.filter(task => (
                <div className="dashboard-div">
                  <TaskPhaseDone
                    task={task.props.phase === "done"}
                    {...this.props}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
