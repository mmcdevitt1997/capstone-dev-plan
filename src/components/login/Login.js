import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getUserGiHub from '../githubAPI/getUserGiHub'
import getReposGithub from '../githubAPI/getReposGithub'
import { login, loginWithGithub } from '../../auth/UserManager'
import ProjectHandler from "../apiHandler/ProjectHandler"
import "./Login.css"

export default class Login extends Component {

  handleGithub = () => {
    loginWithGithub()
      .then(user => {


        this.props.onLogin(user);

        this.props.history.push('/')
      })
      .then(() => getUserGiHub.getUser())
      .then(() => (getReposGithub.getRepos().then(data => {data.forEach(function (project){
       console.log (project.name)
      })})))}





render() {
  return (
    <div className="login-container">
      <h1>Login with Github</h1>
      <form onSubmit={this.submit}>
        <button
          type="button"
          onClick={() => this.handleGithub()}
        >Sign in</button>
      </form>
    </div>
  );
}
}
