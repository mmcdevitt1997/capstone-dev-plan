
import React, { Component } from 'react'
import ProjectCard from "./ProjectCard"

export default class Task extends Component {
// Filter to make sure that the tasks are the current user
    createTasks = () => {
        let user = +sessionStorage.getItem("userId");
        let projectArr = []
        this.props.projects.forEach(project => {
            if (project.userId === user) {
                projectArr.push(project)
            }
        })
        return projectArr
    }

    render() {
        return (
            <div>
                <h1 className="title">Project Page</h1>
                <div className="AddTaskButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/projects/new")
                        }
                        }>Add Projects</button>
                </div>

                <section className="tasks">

                    {
                        this.createTasks(this.props.tasks).map(task =>
                            task.iscompleted === false ?
                                <div key={task.id}  >
                                    <ProjectCard key={project.id} project={project} {...this.props} />
                                </div> : ""
                        )
                    }
                </section>
            </div>
        )
    }
}
