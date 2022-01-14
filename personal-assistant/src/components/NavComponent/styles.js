import styled from 'styled-components'

export const Nav = styled.nav`
width: 50%;
border: 1px solid lightgray;
border-radius: 10px;
background-color: ghostwhite;
text-align: center;
box-shadow: 4px 4px 2px 1px azure;
padding: 20px;
position: absolute;
left: 25%;
top: 0%;
height: 3vh;
display: flex;
`

export const NavItems = styled.ul`
    background-color: inherit;
    text-align: center;
    margin: 0;
    padding: 0;
    height: 30px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: 30px;
`

export const NavItem = styled.li `
    list-style-type: none;
    text-decoration: none;
    flex: 1;
    a{
        border: 1px solid black;
        padding: 10px 30px;
        border-radius: 10px;
        color: white;
        background-color: blue;
        transition: color 1s ease;
        transition: background-color 1s ease;
        &:hover{
            background-color: lightskyblue;
            color: black;
        }
    }

` 