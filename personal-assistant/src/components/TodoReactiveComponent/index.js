import React from 'react'
import { TodoItem } from '../TodoListComponent/styles'

const TodoReactiveComponent = ({todos, updateTodos}) => {
    const myFunc = (item) => updateTodos([...todos.filter((other) => other.id != item.id), {id: item.id, text: item.text, complete: !item.complete}])
    return(
        <>
        {todos.map((item) => {
            return item.complete ? <TodoItem><div onClick = {() => myFunc(item)} style={{  textDecorationLine : 'line-through' }} key={item.text}>{item.text}</div></TodoItem> :  <TodoItem><div onClick = {() => myFunc(item)} key={item.text}>{item.text}</div></TodoItem>
        })}

      </>
)
}

export default TodoReactiveComponent