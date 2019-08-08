import React, { Component } from "react";

export default class TicketDisplay extends Component {

//   handleTicketChange = event => {
//     event.preventDefault();
//     this.props.tickets = event.target.value;
//   };

// updateTicketBody = event => {
//     const ticket = {
//         body: this.state.body
//       }
//       this.props.updateTicket(ticket)
// }

  render() {
    return (
      <div>
        <select
          name="ticketSelect"
          id="ticketSeclect"
          onChange={this.handleTicketChange}
          value=''
        >
          {this.props.tickets.map(ticket => (
            <option value="" key={ticket.id} id={ticket.id} value={ticket.body}>
             {ticket.title}
            </option>
          ))}
        </select>

        <div>{/* display the ticket body */}</div>
      </div>
    );
  }
}
