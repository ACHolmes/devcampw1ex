import React from 'react'
import TodoListComponent from '../../components/TodoListComponent'
import NavComponent from '../../components/NavComponent'
import { Body, Card } from './styles'

const MainPage = () => {
  return (
  <Body>
    <NavComponent></NavComponent>
    <Card>
      <TodoListComponent/>
      
  </Card>
  </Body>
  )
}

export default MainPage