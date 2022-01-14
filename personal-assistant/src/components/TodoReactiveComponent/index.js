import React from 'react'
import { TodoItem } from '../TodoListComponent/styles'

const TodoReactiveComponent = ({todos, updateTodos, filter}) => {
    const toggleComplete = (item) => updateTodos([...todos.filter((other) => other.id !== item.id), {id: item.id, text: item.text, complete: !item.complete}])
    let filtered = todos;
    console.log(todos[0])
    if (filter) {
        filtered = todos.filter((item)=> item.text.includes(filter))
    }
    return(
        <>
        {filtered.map((item) => {
            return item.complete ? <TodoItem><div onClick = {() => toggleComplete(item)} style={{  textDecorationLine : 'line-through' }} key={item.text}>{item.text}</div></TodoItem> :  <TodoItem><div onClick = {() => toggleComplete(item)} key={item.text}>{item.text}</div></TodoItem>
        })}

      </>
)
}

export default TodoReactiveComponent