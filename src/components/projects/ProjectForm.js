import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalBody, ModalHeader } from 'reactstrap';

export default class ProjectForm extends Component {
  state = {
    userId: "",
    projectName: "",
    projectDueDate: "",
    phaseName: ""
  };
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      userId: "",
      projectName: "",
      projectDueDate: "",
      phaseName: ""
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
      userId: "",
      projectName: "",
      projectDueDate: "",
      phaseName: "",
    }));
  }


  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };


  constructNewProject = evt => {
    evt.preventDefault();
    const project = {
      userId: sessionStorage.getItem("userId"),
      projectName: this.state.projectName,
      projectDueDate: this.state.projectDueDate,
      phaseName: this.state.phaseName
    };
    this.toggle()
    this.props.addProject(project)
  };
  // the new task form
  render() {
    return (
      <React.Fragment>
              <Button onClick={this.toggle}>Add Project</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader>Add Project</ModalHeader>
              <ModalBody>
        <Form>
          <FormGroup>
            <label htmlFor="projectName">
              Enter the name of your project repo:
            </label>
            <select
              name="projectName"
              id="projectName"
              onChange={this.handleFieldChange}
              value = {this.state.projectName}
            >
              <option >Select Repo</option>
              {this.props.gitRepos.map(gitRepo=> (
                <option key={gitRepo.id} id={gitRepo.id} value={gitRepo.name}>
                    {gitRepo.name}
                </option>
              ))}
            </select>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="projectDueDate"> Project Due Date:</Label>
            <input
              type="date"
              required
                style = {{width:'fitContent'}}
              onChange={this.handleFieldChange}
              id="projectDueDate"
              placeholder="Date of project"
            />
          </FormGroup>
          <Button
            type="submit"
            onClick={this.constructNewProject}
            className="btn btn-primary"
          >{''}
            Submit
          </Button>
        </Form>
        </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
