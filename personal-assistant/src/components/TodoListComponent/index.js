import React from 'react'
import { TodoList, AddTodo, TodoH2, TodoItem } from './styles'

const TodoListComponent = () => {
    return(
    <>
        <TodoList>
            <TodoH2>Your Todo List</TodoH2>
            <TodoItem>test text that needs to be really long to see if I can break stuff</TodoItem>
            <TodoItem>Test 2</TodoItem>
        </TodoList>
        <AddTodo>
            <h3>Add a Todo!</h3>
            <input type = "text" placeholder='Add Todo'></input>
            <button>submit</button>
        </AddTodo>
    </>)
}

export default TodoListComponent