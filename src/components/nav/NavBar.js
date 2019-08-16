import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from "react"
import { withRouter, Link, } from "react-router-dom"
import "./NavBar.css"
import { Nav, NavItem, Col, Row, Button, NavLink } from 'reactstrap';

import classnames from 'classnames';



class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showNav: true
    };
  }

  operation() {
    this.setState({
      showNav: false
    })
  }

  render() {

    return (

      <Row className="wrapper">


        <Col xs="3" sm="3" md="2.5" className="column">
          <Nav tabs vertical pills className="nav">
            <NavItem className="Navbar taskItem">

              <Link
                to="/"
              >
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzUiIGhlaWdodD0iMzUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzE0YTc2YyI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNODAuNjI1LDEwOS43MjU1OGwtMjkuMTAwNTgsLTI5LjEwMDU4bDcuNjAwNTgsLTcuNjAwNThsMjEuNSwyMS41bDY1LjAwMzkxLC02NS4wMDM5MWMtMy45NDcyNiwtNC44MjkxIC05LjkxMDE2LC04LjAyMDUxIC0xNi42Mjg5MSwtOC4wMjA1MWgtODZjLTExLjg0MTc5LDAgLTIxLjUsOS42NTgyMSAtMjEuNSwyMS41djg2YzAsMTEuODQxOCA5LjY1ODIxLDIxLjUgMjEuNSwyMS41aDg2YzExLjg0MTgsMCAyMS41LC05LjY1ODIgMjEuNSwtMjEuNXYtODZjMCwtMC45NjU4MiAtMC4xNjc5NywtMS45MzE2NCAtMC4yOTM5NSwtMi44NTU0N3oiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4="></img>
              </Link>
            </NavItem>
            <NavItem className="sidebar projectItem" >
              <Link
                to="/projects"
              >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACo0lEQVRo3u2au1IUQRSGP7kFAqGBRamBGfAESiiGkGyuD0ABCy9gwsVYc61CnkCeQFJCFygiljk9UEsGGkiwvwHNssI6szPszg46XdXJbHef+br/c/r09EKXikKeybEpoyajJsemQp5yn4oCxmQEMnSjVnXI4/sE8tG/+FcFjHmwLRlSwIfsX6jCkALeywhbzG58DRhrjOV4kmoMw8mxrgpD6UEc6ymNSwHfbo1nbKcez7GWHsRwfpAXEW0kQ3ewEdlfIVNXK0O3jGQB0gkb/x1IrPwifPClt2G9B3GspXbg67rSe5AKQx7GpQAwGStxoTUTkEz2swKkAClACpAC5M5ZbHzd/jdAWqf/hbQKkAKkiFpF1Cp8pADREc/lmL33IF1b0g45++3otMOgjJIcX2Tsyfgh41zGnn9W0g6D+QK5EZ3kmJVx0Ebfg8Qyy0JaEn1/fFJyfJexqCoTOmFYJwyryoSMsgIqvl1dxqpEX35AriF+yTEn0R8B3a+AeRkXvs9qLkC8nOoe4lXb0nZMe5i6HDM9BfGOfeDlNJfUvgIWGj4TFwC64OzbTWOUGj7xFzlFgogBGbu+TSlbkKZI5cOpZCymVYSMJd9mo3fSMvZlSMeMpwY5YtK32e8lyJkM6ZTRlr8fMx4Lcsqob3OWSxAZb/yuLgVU8g5yKa0qE41nIQ9lfGryq886YTjf0rp29vKtSGb8lPG2jclYzoOzl66k0xx+FfCueZUidvkBn1imD78d3xAD5lNMRDnJhnh5nRYy1eUU5UKO6bb7hbxOlqJ05qKz9d8yjnnkJ2vVP7tQwILEQIycysmTxrtddMbVLYkHEn0ept7wGWNJR0yqxohqjPjotNyUkiRL4zM9jTpmEhysZshzaXHUPfd1V8ZG1FH3N9rVagfHaM1oAAAAAElFTkSuQmCC"></img>
              </Link>
            </NavItem>

            <NavItem >
              <Link
                style= {{color: 'red'}}
                to="/login"
                className= "link"
                onClick={() => {
                  sessionStorage.clear()
                }}
              >
                <h6>Logout</h6>
              </Link>

            </NavItem>

          </Nav>
        </Col>

      </Row>

    )
  }
}


export default withRouter(NavBar)