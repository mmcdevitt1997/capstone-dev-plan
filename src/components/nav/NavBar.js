import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from "react"
import {  withRouter } from "react-router-dom"
import "./NavBar.css"
import {  Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';



class NavBar extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
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

          <Nav tabs vertical pills className= "nav">
          <NavItem className= "sidebar" >
              <NavLink
             color = "#ffffff"
                className={classnames({active: this.state.activeTab === '1'})}
                onClick={() => {
                  this.toggle('1');
                }}
              >
                Profile
              </NavLink>
            </NavItem>
            <NavItem className= "sidebar">
              <NavLink
              className= "text"
              // eslint-disable-next-line
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