import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem, NavItems, Nav } from './styles'

const NavComponent = ( input ) => {
    return(
        <Nav>
        <NavItems>
            <NavItem> <a href = "/"  style = {{border: "1px solid black", padding: "10px 30px", borderRadius: "10px", backgroundColor: "blue", color: "white"}}><strong> Home </strong> </a></NavItem>
            <NavItem> <a href = "/main" style = {{border: "1px solid black", padding: "10px 30px", borderRadius: "10px", backgroundColor: "blue", color: "white"}}><strong>Todo list</strong></a>  </NavItem>
        </NavItems> 

        </Nav>
    )
}

export default NavComponent
