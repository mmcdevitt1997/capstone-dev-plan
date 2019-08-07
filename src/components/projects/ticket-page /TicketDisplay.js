import React, { Component } from "react";

export default class TicketDisplay extends Component {
    handleTicketChange = event => {
        event.preventDefault()
        this.props.ticket = event.target.value;

      }

    render() {
        return (
            <div>

                <select
                    name="ticketSelect"
                    id="ticketSeclect"
                    onChange={this.handleTicketChange}
                    // value={tickets.name}
                >
                    {

                        this.props.tickets.map(ticket =>
                        <option key={ticket.id} id={ticket.id} value={ticket.body}>
                            {ticket.title}
                        </option>
                    )}
                </select>

           <div>
               {/* display the ticket body */}
           </div>

            </div>

        )
    }
}