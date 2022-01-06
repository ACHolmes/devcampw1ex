import React from 'react'
import { TodoItem, TodoList, Body, TodoH2, Card, AddTodo} from './styles'
// import COMPONENT from 'FILEPATH'


/**
 * const tasks = ["task 1", "task 2"];
const todoItems = tasks.map((task) =>
  <li>{task}</li>
);

 * const TodoList = (items) => (
  return (
  <ul>
    {items}
  </ul>
  );
)
    <ul>
      {todoItems}
    </ul>
*/


const App = () => (
  <Body>
    Beep boop. Hi there, I&apos;m your personal assistant :D
    <Card>
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
    </Card>

    
  </Body>

)

export default App
