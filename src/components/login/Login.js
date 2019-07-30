import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { login, loginWithGithub } from '../../auth/UserManager'
import "./Login.css"

export default class Login extends Component {
    // state = {
    //     email: '',
    //     password: ''
    //   }
      handleGithub = () => {
        loginWithGithub()
          .then(user => {
             console.log (user)
            this.props.onLogin(user);
            this.props.history.push('/')
          })
        }

      render() {
        return (
          <div className= "login-container">
            <h1>Login</h1>
            <form onSubmit={this.submit}>
              {/* <input
                onChange={(e) => this.setState({ email: e.target.value })}
                type="email"
                id="email"
                placeholder="email"
                className="form-control"
              />
              <input
                onChange={(e) => this.setState({ password: e.target.value })}
                type="password"
                id="password"
                placeholder="Password"
                className="form-control"
              /> */}
              <button
              type="button"
              onClick={() => this.handleGithub()}
              >Sign in</button>
            </form>
          </div>
        );
      }
    }
