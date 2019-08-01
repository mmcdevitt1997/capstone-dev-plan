import { Route, BrowserRouter as Router} from "react-router-dom";
import React, { Component } from "react";



class ApplicationViews extends Component {
    state = {
        projects: [],
        tasks: [],
        teams: [],
        tickets: [],
        teamUsers: []
    }
    isAuthenticated = () => sessionStorage.getItem("id") !== null;

    render() {
        return (
            <React.Fragment>
                <Router>
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

export default ApplicationViews;
