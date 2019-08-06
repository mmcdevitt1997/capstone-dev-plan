import React, { Component } from "react";
import TasksToDo from "./TaskToDo";
import TasksCurrent from "./TasksCurrent";
import TaskPhaseDone from "./TasksPhaseDone";
import TaskCard from "./TaskCard"

export default class Task extends Component {


filterToDo = (taskFilter) => {
  let filterToDo = this.state.task
  filterToDo = filterToDo.filter((task)=> {
   return task.phaseId === "1"
  }).map(function (task) {
    return task

})
}

filterCurrent = (taskFilter) => {
  let filterCurrent = this.state.task
  filterCurrent = filterCurrent.filter((task)=> {
    return task.phaseId === "2"
  })
}
filterDone = (taskFilter) => {
  let arrayDone = []
  let filterDone = this.state.task
  filterDone = filterDone.filter((task)=> {
    if (task.phaseId === "3") {
      arrayDone.push(task)
    }
  })
}


filterTask = () => {
var nonFriends = []
let friends = [];
this.props.list.forEach(function (user) {
  if (user.friend) {
    friends.push(user);
  } else {
    nonFriends.push(user);
  }
});
}



  render() {
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

          <section className="tasks">
                    {

                        this.props.tasks.map(task =>
                                <div key={task.id}  >
                                    <TaskCard key={task.id} task={task} {...this.props} />
                                </div>
                        )
                    }
                </section>
            </div>
            </div>
    )
                  }

/* /* </div>
        <div className="parent-Dash-Div">
          <div className="dashboard-row">
            <div className="dashboard-div-box">
              <h3>To Do</h3>
              <div className="dashboard-div">
                {this.props.tasks.filter(task => (
                  <div className="dashboard-div">
                    <TasksToDo
                      task={this.state.filterToDo}
                      {...this.props}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="dashboard-div-box">
              <h3>Currently Working On</h3>
              {this.props.tasks.filter(task => (
                <div className="dashboard-div">{

                }
                  <TasksCurrent
                    task={this.state.filterDone }
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
                    task={task.props.phaseId === "3"}
                    {...this.props}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
     */
              }
