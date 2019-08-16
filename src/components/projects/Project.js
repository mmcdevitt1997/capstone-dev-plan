
import React, { Component } from 'react'
import ProjectCard from "./ProjectCard"
import "./ProjectCard.css";
import ProjectForm from "./ProjectForm"

export default class Project extends Component {
// Filter to make sure that the tasks are the current user

    render() {

        return (
            <div>
                <h1 className="title">Project Page</h1>
                <div className='projectButton'>
                     < ProjectForm phases={this.props.phases} {...this.props} addProject={this.props.addProject} projects={this.props.projects}/>
                </div>

                <section className="projects">
                    {

                        this.props.projects.map(project =>
                                <div key={project.id}  >
                                    <ProjectCard key={project.id} project={project} phases={this.phases} {...this.props} />
                                </div>
                        )
                    }
                </section>
            </div>
        )
    }
}
