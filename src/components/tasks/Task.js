import React, { Component } from "react";
import "./Task.css"
import TaskCard from "./TaskCard"
import TaskForm from "./TaskForm"



export default class Task extends Component {



  render() {
    return (
      <div>
      <div>
        <h1>Task Board</h1>
        <div className="taskButton" >
        <TaskForm phases={this.props.phases} {...this.props} addTask={this.props.addTask} projects={this.props.projects}/>
         </div>
        </div>

        <div className="bigFlex">
          <div >
            <h3 >To Do</h3>
            <div>
              <div>
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
          <div >
            <h3>Currently Working On</h3>
            <div >
              {

                this.props.tasks.filter(tasks => tasks.phaseName === "Current Task").map(taskFilter =>
                  <div key={taskFilter.id}  >
                    <TaskCard key={taskFilter.id} task={taskFilter} phases={this.phases} {...this.props} />
                  </div>
                )
              }
            </div>

          </div>

        <div>
          <h3>Finished Tasks </h3>
          <div >

            <div>
              {
                this.props.tasks.filter(tasks => tasks.phaseName === "Done").map(taskFilter =>
                  <div key={taskFilter.id}>
                    <TaskCard key={taskFilter.id} task={taskFilter} phases={this.phases} {...this.props} />
                  </div>
                )
              }
               </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
