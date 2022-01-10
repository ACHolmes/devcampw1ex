import React from 'react'
import NavComponent from '../../components/NavComponent'
import { Body, Card, FlexContainer } from './styles'
import image from '../../images/dontpanic.jpeg'

const LandingPage = () => {
  return (
  <Body>
    <NavComponent></NavComponent>
    <Card>
    <FlexContainer>
      <h1 style = {{textAlign: 'center', width: '100%'}}> A helpful reminder before you look at your todo list:</h1>
      <img src={image} style = {{width: '650px', height: '650px', margin: 'auto', borderRadius: '75px', objectFit: 'cover'}}></img>
    </FlexContainer>

    </Card>
  </Body>
  )
}

export default LandingPage