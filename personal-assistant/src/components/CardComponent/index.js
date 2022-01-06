import React from 'react'
import TodoListComponent from '../TodoListComponent'
import { Card } from './styles'

const CardComponent = ({ input }) => {
    return(
        <Card> <TodoListComponent/> </Card>
    )
}

export default CardComponent
