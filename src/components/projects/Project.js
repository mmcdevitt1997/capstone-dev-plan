
import React, { Component } from 'react'
import ProjectCard from "./ProjectCard"

export default class Project extends Component {
// Filter to make sure that the tasks are the current user

    render() {console.log(this.props.projects)

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

                <section className="projects">
                    {

                        this.props.projects.map(project =>
                                <div key={project.id}  >
                                    <ProjectCard key={project.id} project={project} {...this.props} />
                                </div>
                        )
                    }
                </section>
            </div>
        )
    }
}
