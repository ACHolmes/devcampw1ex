import React from 'react'
import LandingPage from './containers/LandingPage'
import MainPage from './containers/MainPage'
// import COMPONENT from 'FILEPATH'
import {
  BrowserRouter,
  Switch,
  Route,
  useParams
} from "react-router-dom";


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

    /**<Card>
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

    */


const App = () => (
  <Switch>
    <Route path="/main">
      <MainPage>test</MainPage>  
    </Route>
    <Route path="/">
      <LandingPage/>
    </Route>
  </Switch>


)

export default App
