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
              style={{ backgroundColor: 'red', padding: '1px 1px' }}
              className="marginRight"
            >
               <img alt="Trash Bin" src="https://img.icons8.com/ios/25/000000/trash.png"></img>
          </Button>

            <Button
               style={{ padding: '1px 1px', margin:'5px'  }}
              onClick={() => this.props.history.push(`/projects/${this.props.project.id}/tickets`)
              }

            >
              Tickets
          </Button>
            <Button
            style={{ padding: '1px 1px' }}
              onClick={() => this.props.history.push(`/projects/${this.props.project.projectName}/tasks`)}

            >
              Task Page
          </Button>
          <Button
              onClick={() => this.props.history.push(`projects/${this.props.project.id}/edit`)}
              style={{ backgroundColor: 'white', padding: '1px 1px' }}
              className="marginLeft"

            >
            <img alt="Edit Button"src="https://img.icons8.com/pastel-glyph/25/000000/edit.png"></img>
          </Button>
        </CardBody>
      </Card>
    )
  }
}

