import React, { Component } from "react";
import getUserGiHub from "../githubAPI/getUserGitHub";
import { loginWithGithub } from "../../auth/UserManager";
import "./Login.css";
import ProjectHandler from "../apiHandler/ProjectHandler";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FaGithub } from 'react-icons/fa';
import logo from "./Dev-Plan.png"



export default class Login extends Component {
  handleGithub = () => {
    loginWithGithub()
      .then(user => {
        this.props.onLogin(user);

        this.props.history.push("/");
      })
      .then(() => getUserGiHub.getUser())
      .then(() =>
        ProjectHandler.getAll().then(data => {
          data.forEach(function (project) {
            console.log(project);
          });
        })
      );
  };

  render() {
    return (
      <div>
        <img src= {logo} alt="logo"></img>
          <Form onSubmit={this.submit}>

            <Button type="button"

            onClick={() => this.handleGithub()}>
              Sign in with GitHub <FaGithub /> </Button>
          </Form>

      </div>
    );
  }
}
