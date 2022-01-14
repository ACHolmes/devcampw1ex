import React, { useState } from 'react'
import { TodoList, TodoH2 } from './styles'
import TodoReactiveComponent from '../TodoReactiveComponent'
import AddTodoComponent from '../AddTodoComponent'
import FilterTodoComponent from '../FilterTodoComponent'

const TodoListComponent = () => {
    const [counter, updateCounter] = useState(0);
    const [value, setValue] = useState('');
    const [state, setState] = useState([]);
    const [filter, setFilter] = useState('');
    console.log({state})

    return(
    <>
        <TodoList>
            <TodoH2>Your Todo List</TodoH2>
            <TodoReactiveComponent todos = {state} updateTodos = { setState } filter = {filter}/>
        </TodoList>
        <AddTodoComponent todos = {state} setTodos = {setState} counter = {counter} setCounter = {updateCounter} value = {value} setValue = {setValue} ></AddTodoComponent>
        <FilterTodoComponent filter = {filter} setFilter = {setFilter}></FilterTodoComponent>
    </>)
}

export default TodoListComponent