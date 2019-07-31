import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from "react"
import {  withRouter } from "react-router-dom"
import "./NavBar.css"
import {  Nav, NavItem, NavLink, Row, Col, Button} from 'reactstrap';

import classnames from 'classnames';



class NavBar extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '2'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {

    return (
      <Row className= "wrapper">
        <Col xs="3" sm="3" md="2.5" className= "column">
        <Button  className= "btn btn-default btn-circle  text-center"
                className={classnames({active: this.state.activeTab === '1'})}
                onClick={() => {
                  this.toggle('1');
                }}
              >
                Profile
            </Button>

          <Nav tabs vertical pills className= "nav">

            <NavItem className= "sidebar">
              <NavLink

              className= "text"
                className={classnames({active: this.state.activeTab === '2'})}
                onClick={() => {
                  this.toggle('2');
                }}
              >
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem className= "sidebar" >
              <NavLink
             color = "#ffffff"
                className={classnames({active: this.state.activeTab === '3'})}
                onClick={() => {
                  this.toggle('3');
                }}
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem className= "sidebar">
              <NavLink
                className={classnames({active: this.state.activeTab === '4'})}
                onClick={() => {
                  this.toggle('4');
                }}
              >
               Tasks
              </NavLink>
            </NavItem>

          </Nav>
        </Col>

      </Row>
    )
  }
}


export default withRouter(NavBar)