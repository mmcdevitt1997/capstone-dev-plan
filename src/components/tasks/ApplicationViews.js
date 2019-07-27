import { Route, withRouter, Router } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "../nav/NavBar"


class ApplicationViews extends Component {
    state = {
        users: [],
        articles: [],
        events: [],
        tasks: [],
        messages: [],
        friends: []
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                <NavBar  />
                <Route exact path="/" render={(props) => {
                    return null
                }} />
                <Route path="/tasks" render={(props) => {
                    return null
                }} />
                <Route path="/projects" render={(props) => {
                    return null
                }} />

                </Router>
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews);
