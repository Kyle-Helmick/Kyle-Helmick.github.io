import React, { CSSProperties, useState } from 'react'
import {
  Collapse,
  Nav,
  Navbar as Bootbar,
  NavbarToggler,
  NavItem,
  NavLink as BootLink
} from 'reactstrap'
import { NavLink as RouterLink } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  let NavStyle: CSSProperties = {
    width: '100%',
    position: 'absolute',
    top: '0px',
    right: '0px',
    backgroundColor: 'rgba(255,255,255,.9)'
  }

  let ActiveStyle = {
    textDecoration: 'underline'
  }

  return (
    <Bootbar style={NavStyle} light expand="md" className="position-fixed">
      <NavbarToggler onClick={() => setToggle(!toggle)} />
      <Collapse isOpen={toggle} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <BootLink
              tag={RouterLink}
              activeStyle={ActiveStyle}
              exact
              to="/"
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </BootLink>
          </NavItem>
          <NavItem>
            <BootLink
              tag={RouterLink}
              activeStyle={ActiveStyle}
              to="/me"
              onClick={() => window.scrollTo(0, 0)}
            >
              Me
            </BootLink>
          </NavItem>
          <NavItem>
            <BootLink
              tag={RouterLink}
              activeStyle={ActiveStyle}
              to="/projects"
              onClick={() => window.scrollTo(0, 0)}
            >
              Projects
            </BootLink>
          </NavItem>
          <NavItem>
            <BootLink
              tag={RouterLink}
              activeStyle={ActiveStyle}
              to="/everythingelse"
              onClick={() => window.scrollTo(0, 0)}
            >
              Everything Else
            </BootLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Bootbar>
  )
}

export default Navbar
