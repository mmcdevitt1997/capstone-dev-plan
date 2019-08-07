import React, { Component } from "react";

import TaskCard from "./TaskCard"

export default class Task extends Component {

  render() {
    return (
      <div>
      <div className="AddTaskButton">
      <button type="button"
          className="btn btn-success"
          onClick={() => {
              this.props.history.push("/tasks/new")
          }
          }>Add Task</button>
         </div>

        <div className="">
          <div className="">
            <h3>To Do</h3>
            <div className="">
              <div className="">
                {

                  this.props.tasks.filter(tasks => tasks.phaseName === "To Do").map(taskFilter =>
                    <div key={taskFilter.id} >
                      <TaskCard key={taskFilter.id} task={taskFilter} phases={this.phases} {...this.props} />
                    </div>
                  )
                }
              </div>
              </div>
          </div>
          <div className="">
            <h3>Currently Working On</h3>
            <div className="">
              {

                this.props.tasks.filter(tasks=>tasks.phaseName === "Current Task").map(taskFilter =>
                  <div key={taskFilter.id}  >
                    <TaskCard key={taskFilter.id} task={taskFilter} phases={this.phases} {...this.props} />
                  </div>
                )
              }
            </div>

            </div>
        </div>
        <div className="">
          <h3>Finished Tasks </h3>
          <div className="">

            <div className="">
              {
                // filter(tasks =>tasks.phaseName === "Done")
                this.props.tasks.filter(tasks =>tasks.phaseName === "Done").map(taskFilter =>
                  <div key={taskFilter.id}>
                    <TaskCard key={taskFilter.id} task={taskFilter} phases={this.phases} {...this.props} />
                  </div>
                )
              }
            </div>

            </div>
        </div>
        </div>

    )
  }
}
