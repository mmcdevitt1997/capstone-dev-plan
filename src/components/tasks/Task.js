import React, { Component } from "react";
import "./Task.css"
import TaskCard from "./TaskCard"
import TaskForm from "./TaskForm"



export default class Task extends Component {

  render() {
    let taskArry =
    this.props.tasks.filter(tasks => tasks.phaseName === "Current Task") || []
    return (
      <div>
      <div>
        <h1>Task Board</h1>
        <div className="taskButton" >
        <TaskForm phases={this.props.phases} tasks={this.props.tasks} {...this.props} addTask={this.props.addTask} projects={this.props.projects}/>
         </div>
        </div>

        <div className="bigFlex">
          <div >
            <h3 style= {{color: '#FF652F'}}>To Do</h3>
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
            <h3 style= {{color: '#FFE400'}}>Currently Working On</h3>
            <div  >
              {

              taskArry.map(taskFilter =>
                  <div key={taskFilter.id}  >
                    <TaskCard key={taskFilter.id} task={taskFilter} phases={this.phases} {...this.props} />
                  </div>
                )
              }
            </div>

          </div>

        <div>
          <h3 style= {{color: '#14A76C'}} >Finished Tasks </h3>
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
