import React from 'react'


const AddTodoComponent = ({todos, setTodos, counter, setCounter, value, setValue}) => {
    const addTodoToList = () => {
        setCounter(counter + 1);
        setTodos( todos => [...todos, {id : counter, text: value, complete: false}]);
        setValue('');
    };    
    return(
        <>
            <h3>Add a Todo!</h3>
            <textarea	value={value} onChange={e => setValue(e.target.value)} />
            <button type='submit' onClick={addTodoToList}>submit</button>
      </>
)
}

export default AddTodoComponent