import React from 'react';
import './Todo.css';

function Todo ( {newTodo, remove} ) {

    const handleClick = (evt) => {
        remove(newTodo);
    }

    return (
        <React.Fragment>
            <li>{newTodo}<button className='Todo-button' onClick={handleClick}>X</button></li>  
        </React.Fragment>
    )

}

export default Todo;