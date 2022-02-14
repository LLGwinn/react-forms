import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import './NewTodoForm.css';

function NewTodoForm ( {addTask} ) {
    const [task, setTask] = useState("");

    const handleChange = (evt) => {
        setTask( evt.target.value );
    }

    const handleClick = (evt) => {
        evt.preventDefault();
        addTask({task, id: uuid()});
        setTask("");
    }

    return (
        <div className="NewTodoForm">
          <h3>Add a task:</h3>
          <form>
              <input type='text'
                     name='task'
                     id='task' 
                     placeholder='Enter new task' 
                     value={task} 
                     onChange={handleChange}/>
              <button className='NewTodoForm-button' onClick={handleClick}>Add Task</button>
          </form>
        </div>
    );
}

export default NewTodoForm;