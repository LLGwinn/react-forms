import React, {useState} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

function TodoList () {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        return setTasks( tasks => [...tasks, newTask] );
    }

    const removeTask = (todo) => {
        return setTasks( tasks => {
            return tasks.filter( task => task.task !== todo)
        })
    }

    return (
        <div className="TodoList">
            <h3>To-Do List:</h3>
            <ul className='TodoList-ul'>
                {
                tasks.map ( task => (
                    < Todo newTodo={task.task} remove={removeTask} key={task.id}/>
                ))
                }
            </ul>
          <NewTodoForm addTask={addTask}/>
        </div>
    );
}

export default TodoList;