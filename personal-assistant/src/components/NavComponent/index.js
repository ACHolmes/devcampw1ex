import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem, NavItems, Nav } from './styles'

const NavComponent = ( input ) => {
    return(
        <Nav>
        <NavItems>
            <NavItem> <a href = "/"><strong> Home </strong> </a></NavItem>
            <NavItem> <a href = "/main"><strong>Todo list</strong></a>  </NavItem>
        </NavItems> 

        </Nav>
    )
}

export default NavComponent
