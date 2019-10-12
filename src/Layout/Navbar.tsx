import React, { useState, CSSProperties } from 'react'

import {
  Collapse,
  Navbar as Bootbar,
  NavbarToggler,
  Nav,
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
    right: '0px'
  }

  let ActiveStyle = {
    textDecoration: 'underline'
  }

  return (
    <Bootbar style={NavStyle} light expand='md'>
      <NavbarToggler onClick={() => setToggle(!toggle)} />
      <Collapse isOpen={toggle} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <BootLink tag={RouterLink} activeStyle={ActiveStyle} exact to='/'>
              Home
            </BootLink>
          </NavItem>
          <NavItem>
            <BootLink tag={RouterLink} activeStyle={ActiveStyle} to='/me'>
              Me
            </BootLink>
          </NavItem>
          <NavItem>
            <BootLink tag={RouterLink} activeStyle={ActiveStyle} to='/projects'>
              Projects
            </BootLink>
          </NavItem>
          <NavItem>
            <BootLink
              tag={RouterLink}
              activeStyle={ActiveStyle}
              to='/everythingelse'>
              Everything Else
            </BootLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Bootbar>
  )
}

export default Navbar
