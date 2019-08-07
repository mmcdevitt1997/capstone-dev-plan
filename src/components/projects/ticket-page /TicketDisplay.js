import React, { Component } from "react";

export default class TicketDisplay extends Component {

    render() {
        return (
            <div>
                {
                    this.props.tickets.map(ticket =>
                        <div key={ticket.id}>
                            <p>${ticket.body}</p>
                        </div>

                    )

                }
            </div>

        )
    }
}