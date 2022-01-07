import React from 'react'
import TodoListComponent from '../../components/TodoListComponent'
import CardComponent from  '../../components/CardComponent'
import { Body, Card } from './styles'

const MainPage = () => {
  return (
  <Body>
    <Card>
      <TodoListComponent/>
  </Card>
  </Body>
  )
}

export default MainPage