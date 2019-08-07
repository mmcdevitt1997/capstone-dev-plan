import React, { Component } from 'react'
import getUserGithub from "../../githubAPI/getUserGitHub"
import ProjectHandler from "../../apiHandler/ProjectHandler"
import TicketDisplay from "./TicketDisplay"


export default class Ticket extends Component {
    state = {
       tickets:[]
     };
     gitIssues = () => {
        return Promise.all([getUserGithub.getUser(), ProjectHandler.get(this.props.match.params.id)])
            .then(dataArr => fetch(`https://api.github.com/repos/${dataArr[0].login}/${dataArr[1].projectName}/issues`))
            .then(tickets => tickets.json())
            .then(ticket => ticket)
    }

    componentDidMount() {
        const newState ={}
        this.gitIssues().then(tickets => newState.tickets = tickets)
        .then(() => this.setState(newState))
    }
    render() {
        return (
            <div>
                <h1>Project Tickets</h1>
                {
                <TicketDisplay key={this.state.tickets.id} tickets={this.state.tickets} {...this.props} />
                }
            </div>
        )
    }
}