import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';
import './NewBoxForm.css';

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const addBox = (newBox) => {
          setBoxes( boxes => [...boxes, {...newBox, id:uuid()}] );   
    }

    const removeBox = (id) => {
        setBoxes( boxes => {
            return boxes.filter(box => box.id !== id)      
        })
    }

    return(
        <React.Fragment>
            <div className='BoxList'>
                <h2>Your boxes:</h2>
                <div>
                    {boxes.map( (box) => 
                        <Box id={box.id}
                             color={box.color} 
                             width={box.width} 
                             height={box.height} 
                             key={box.id} 
                             removeBox={removeBox}/>
                    )}
                </div>
            </div>
            <div className='NewBoxForm'>
                <h2>Make a New Box!</h2>
                <NewBoxForm addBox={addBox} />
            </div>
        </React.Fragment>


    )
}

export default BoxList;