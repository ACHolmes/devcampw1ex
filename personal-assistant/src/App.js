import React from 'react'
// import COMPONENT from 'FILEPATH'

const tasks = ["task 1", "task 2"];
const todoItems = tasks.map((task) =>
  <li>{task}</li>
);

/**const TodoList = (items) => (
  return (
  <ul>
    {items}
  </ul>
  );
)
*/


const App = () => (
  <div>
    Beep boop. Hi there, I&apos;m your personal assistant :D
    <ul>
      {todoItems}
    </ul>
  </div>

)

export default App
