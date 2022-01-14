import React from 'react'
import { TodoItem } from '../TodoListComponent/styles'
import { DeleteButton } from './styles'

const TodoReactiveComponent = ({todos, updateTodos, filter}) => {
    const toggleComplete = (item) => updateTodos([...todos.filter((other) => other.id !== item.id), {id: item.id, text: item.text, complete: !item.complete}])
    let filtered = todos;
    console.log(todos[0])
    if (filter) {
        filtered = todos.filter((item)=> item.text.includes(filter))
    }
    const deleteTodo = (id) => {
        return () => updateTodos([...todos].filter((item) => item.id != id))
    }
    return(
        <>
        {filtered.map((item) => {
            return item.complete ? <TodoItem><div onClick = {() => toggleComplete(item)} style={{  textDecorationLine : 'line-through' }} key={item.text}>{item.text}</div><DeleteButton onClick = {deleteTodo(item.id)}>Delete todo</DeleteButton></TodoItem> :  <TodoItem><div onClick = {() => toggleComplete(item)} key={item.text}>{item.text}</div><DeleteButton onClick = {deleteTodo(item.id)}>Delete todo</DeleteButton></TodoItem>
        })}

      </>
)
}

export default TodoReactiveComponent