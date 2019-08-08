import React, { Component } from "react";

export default class TicketDisplay extends Component {



    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }



  render() {
      console.log(this.props.value)

    return (
      <div>
          <form >
        <select
          name="ticketSelect"
          id="ticketSelect"
          onChange={this. handleChange }
          value= {this.props.tickets.title}
        >
          {this.props.tickets.map(ticket => (
            <option  key={ticket.id} id={ticket.id} value={ticket.body}>
             {ticket.title}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit" />
        <div> {this.state.value} </div>
        </form>
      </div>
    );
  }
}
