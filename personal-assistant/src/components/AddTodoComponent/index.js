import React from 'react'
import { AddTodo} from './styles'


const AddTodoComponent = ({todos, setTodos, counter, setCounter, value, setValue}) => {
    const addTodoToList = () => {
        setCounter(counter + 1);
        setTodos( todos => [...todos, {id : counter, text: value, complete: false}]);
        setValue('');
    };    
    return(
        <>
        <AddTodo>
            <h3>Add a Todo!</h3>
            <input	value={value} onChange={e => setValue(e.target.value)} />
            <button type='submit' onClick={addTodoToList}>submit</button>
        </AddTodo>
      </>
)
}

export default AddTodoComponent