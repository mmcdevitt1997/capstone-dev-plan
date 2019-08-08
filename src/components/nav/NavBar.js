import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from "react"
import {  withRouter, Link, Redirect } from "react-router-dom"
import "./NavBar.css"
import { Nav, NavItem, NavLink, Button, Col, Row} from 'reactstrap';

import classnames from 'classnames';



class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showNav: true
    };
  }

 operation (){
  this.setState({
     showNav:false
   })
 }

  render() {

    return (

      <Row className= "wrapper">

        <Col xs="3" sm="3" md="2.5" className= "column">
          <Nav tabs vertical pills className= "nav">
            <NavItem className= "sidebar" >
              <Link
             color = "#ffffff"
                className={classnames()}
                to ="/projects"
                onClick={() => {

                  console.log("click")
                }}
              >
                Projects
              </Link>
            </NavItem>
            <NavItem className= "Navbar">
            <Link
                to="/"
                className={classnames()}
                onClick={() => {
                }}
              >
               Tasks
               </Link>
            </NavItem>
            <NavItem>
              <Link
              to = "/login"
                className={classnames()}
                onClick={() => {
                  sessionStorage.clear()
                }}
              >
                Logout
              </Link>

            </NavItem>

          </Nav>
        </Col>

      </Row>

    )
  }
}


export default withRouter(NavBar)