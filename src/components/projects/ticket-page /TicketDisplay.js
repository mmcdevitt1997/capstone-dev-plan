import React, { Component } from "react";
import "./ticket.css"
import {
    Card,
    CardTitle,
    Button,
    CardBody,
    CardSubtitle
  } from 'reactstrap';


export default class TicketDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = { value: 'Ticket will display here.' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div >
                <div>
                <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/tasks/new")
                    }
                    }>Add Task</button>
                    </div>

                <select
                    name="ticketSelect"
                    id="ticketSelect"
                    onChange={this.handleChange}
                    value={this.props.tickets.title}
                >
                    <option value="Ticket Will Display Here">Select Ticket </option>
                    {this.props.tickets.map(ticket => (
                        <option key={ticket.id} id={ticket.id} value={ticket.body}>
                            {ticket.title}
                        </option>
                    ))}
                </select>

                <div className='ticketContent'>
                <Card
                className='center'
                >
                <CardTitle

                >
                {this.state.value}
                </CardTitle>
                </Card>


                </div>
            </div >
        );
    }
}
