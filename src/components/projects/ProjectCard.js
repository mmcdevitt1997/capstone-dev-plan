import React, { Component } from "react";
import "./ProjectCard.css"
import { Card,
  CardTitle, Button } from 'reactstrap';



export default class ProjectCard extends Component {

  render() {

    return (
      <Card>
      <div key={this.props.project.id} className="card">

        <div className="card-body">

            <CardTitle>{this.props.project.projectName}</CardTitle>


          <p>Due Date:{this.props.project.projectDueDate}</p>

          <button
            onClick={() => this.props.deleteProject(this.props.project.id)}
            className="delete-btn"
          >
            Delete
          </button>
          <Button
            onClick={() => this.props.deleteProject(this.props.project.id)}
            className="delete-btn"
          >
            Edit
          </Button>
          <button
            onClick={() => this.props.deleteProject(this.props.project.id)}
            className="delete-btn"
          >
            tickets
          </button>
          <button
            onClick={() => this.props.deleteProject(this.props.project.id)}
            className="delete-btn"
          >
            task
          </button>
          <button
            onClick={() => this.props.deleteProject(this.props.project.id)}
            className="delete-btn"
          >
            images
          </button>
        </div>

      </div>
      </Card>
    );
  }
}
