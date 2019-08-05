// import React from 'react';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, withRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import ApplicationViews from "./components/ApplicationViews";
import Login from "./components/login/Login";
import {
  setUserInSessionStorage,
  getUserInSessionStorage
} from "./auth/UserManager";

class App extends Component {
  state = {
    user: getUserInSessionStorage()
  };

  render() {
    return (
        <div className="App">
          <Router>
            <Route
            path="/login"
            render={props => (
              <Login
                {...props}
                onLogin={user => this.setState({ user: user })}
              />
            )}
          />
          <Route
            path="/"
            render={props => {
              return this.state.user ? (
                <div>
                  <NavBar {...props} />
                  <ApplicationViews {...props}/>
                </div>
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          </Router>
        </div>

    );
  }
}

export default App
