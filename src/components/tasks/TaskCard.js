import React, { Component } from "react";
import TaskEditCard from "./TaskEditCard"
import {
  Card,
  CardTitle,
  Button,
  CardBody,
  CardSubtitle
} from 'reactstrap';



export default class TaskCard extends Component {
  handleTaskPhaseChange = event => {
    event.preventDefault();
    this.props.task.phaseName = event.target.value;
    this.props.updateTask(this.props.task);
  };

  render() {
    return (
      <Card key={this.props.task.id} style={{ backgroundColor: '#272727', borderColor: '#333' }}>
        <CardBody>
          <CardTitle>{this.props.task.taskName}</CardTitle>

          <CardSubtitle>Due Date: {this.props.task.taskDueDate}</CardSubtitle>
          <CardSubtitle>Project: {this.props.task.projectName}</CardSubtitle>



          <Button
            className="marginRight"
            onClick={() => this.props.deleteTask(this.props.task.id)}
            style={{ backgroundColor: 'red', padding: '1px 1px' }}
          >
            <img src="https://img.icons8.com/ios/25/000000/trash.png"></img>
          </Button>
          <select
            name="phase"
            id="phaseName"
            onChange={this.handleTaskPhaseChange}
            value={this.phaseName}
          >
            <option value="phaseName">{this.props.task.phaseName}</option>
            {this.props.phases.map(phase => (
              <option key={phase.id} id={phase.id} value={phase.phaseName}>
                {phase.phaseName}
              </option>
            ))}
          </select>

          <Button
            className="marginLeft"
            onClick={() => this.props.history.push(`/tasks/${this.props.task.id}/edit`)}
            style={{ backgroundColor: 'white', padding: '1px 1px' }}
          >
            <img src="https://img.icons8.com/pastel-glyph/25/000000/edit.png"></img>
          </Button>
        </CardBody>
      </Card>
    );
  }
}
