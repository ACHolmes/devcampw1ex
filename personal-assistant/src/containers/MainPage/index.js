import React from 'react'
import TodoListComponent from '../../components/TodoListComponent'
import CardComponent from  '../../components/CardComponent'
import { Body } from './styles'

const MainPage = () => {
  return (
  <Body>
    <CardComponent>
      <TodoListComponent/>
      <div>words</div>
  </CardComponent>
  </Body>
  )
}

export default MainPage