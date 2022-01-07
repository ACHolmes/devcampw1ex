import React, { useState } from 'react'
import { TodoList, TodoH2, TodoItem } from './styles'
import TodoReactiveComponent from '../TodoReactiveComponent'
import AddTodoComponent from '../AddTodoComponent'

const TodoListComponent = () => {
    const [counter, updateCounter] = useState(0);
    const [value, setValue] = useState('');
    const [state, setState] = useState([]);

    console.log({state})

    return(
    <>
        <TodoList>
            <TodoH2>Your Todo List</TodoH2>
            <TodoReactiveComponent todos = {state} updateTodos = { setState }/>
        </TodoList>
        <AddTodoComponent todos = {setState} setTodos = {setState} counter = {counter} setCounter = {updateCounter} value = {value} setValue = {setValue} ></AddTodoComponent>
    </>)
}

export default TodoListComponent