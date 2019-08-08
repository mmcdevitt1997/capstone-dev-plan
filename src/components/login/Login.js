import React, { Component } from "react";
import getUserGiHub from "../githubAPI/getUserGitHub";
import { loginWithGithub } from "../../auth/UserManager";
import "./Login.css";
import ProjectHandler from "../apiHandler/ProjectHandler";


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
          data.forEach(function(project) {
            console.log(project);
          });
        })
      );
  };

  render() {
    return (
      <div className="login-container">
        <h1>Login with Github</h1>
        <form onSubmit={this.submit}>
          <button type="button" onClick={() => this.handleGithub()}>
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
