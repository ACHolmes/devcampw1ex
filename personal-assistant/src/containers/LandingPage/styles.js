import styled from 'styled-components'

export const Body = styled.body`
  background-color: #eee;
  margin: 0;
  height: 100vh;
`

export const Card = styled.div`
width: 50%;
border: 1px solid lightgray;
border-radius: 10px;
background-color: ghostwhite;
text-align: center;
box-shadow: 4px 4px 2px 1px azure;
padding: 20px;
position: absolute;
left: 25%;
top: 10%;
height: 70vh;
display: flex;
`
export const FlexContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;`