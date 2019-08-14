import React, { Component } from "react";
import "./ProjectCard.css"
import {
  Card,
  CardTitle,
  Button,
  CardBody,
  CardSubtitle
} from 'reactstrap';

export default class ProjectCard extends Component {
  handleProjectPhaseChange = event => {
    event.preventDefault();
    this.props.project.phaseName = event.target.value;
    this.props.updateProject(this.props.projects);
  };
  render() {

    return (
      <Card style = {{backgroundColor: '#272727', borderColor: '#333'}}>
        <CardBody key={this.props.project.id}>
            <CardTitle>{this.props.project.projectName}</CardTitle>
            <CardSubtitle>Due Date: {this.props.project.projectDueDate}</CardSubtitle>
            <Button
              onClick={() => this.props.deleteProject(this.props.project.id)}
              className="delete-btn"
            >
              Delete
          </Button>
            <Button
              onClick={() => this.props.history.push(`projects/${this.props.project.id}/edit`)}
              className="btn"
            >
              Edit
          </Button>
            <Button
              onClick={() => this.props.history.push(`/projects/${this.props.project.id}/tickets`)
              }
              className="btn"
            >
              Tickets
          </Button>
            <Button
              onClick={() => this.props.history.push(`/projects/${this.props.project.projectName}/tasks`)}
              className="btn"
            >
              Task Page
          </Button>
        </CardBody>
      </Card>
    )
  }
}

