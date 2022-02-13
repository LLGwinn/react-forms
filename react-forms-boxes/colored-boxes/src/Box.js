import React from 'react';
import './Box.css';

function Box( {id, color, width, height, removeBox}) {
    const boxStyle = {
        backgroundColor: color,
        width: `${width}px`,
        height: `${height}px`
    };

    const handleClick = (evt) => {
        removeBox(id)
    }

    return(
        <div className='Box-container'>
            <div className='Box' style={boxStyle}></div>
            <button className='Box-btn' onClick={handleClick}>X</button>
        </div>
    );
}

export default Box;