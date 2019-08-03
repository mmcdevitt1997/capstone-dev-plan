import React, { Component } from 'react'
import TaskCard from "./TaskCard"

export default class Project extends Component {
// Filter to make sure that the tasks are the current user

    render() {console.log(this.props.tasks)

        return (

            <div>
                <h1 className="title">Task Page</h1>
                <div className="AddTaskButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/tasks/new")
                        }
                        }>Add Task</button>
                </div>

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
        )
    }
}
