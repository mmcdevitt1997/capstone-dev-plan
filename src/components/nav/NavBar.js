import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import "./NavBar.css"

class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row py-3">
          <div className="col-3 order-2" id = "sticky-sidebar">
            <nav className="container-fluid">
              <div className="sidebar-header">
                <h1>sidebar</h1>
              </div>
              <ul className="list-unstyled components">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tasks">Tasks</Link>
                </li>
                <li className="nav-iß∏tem">
                  <Link className="nav-link" to="/projects">Projects</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

    )
  }
}


export default withRouter(NavBar)