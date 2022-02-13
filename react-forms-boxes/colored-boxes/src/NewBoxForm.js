import React, {useState} from 'react';
import './NewBoxForm.css';

function NewBoxForm({addBox}) {
    const INITIAL_STATE = {color:"", width:"", height:""};

    const [formData, setFormData] = useState(INITIAL_STATE);

    const makeBox = () => {
        addBox(formData);
    }

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData( data => ({
            ...data, [name]:value
        }));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        makeBox();
        setFormData(INITIAL_STATE);
    }

    return (
        <form className='NewBoxForm'>
            <label htmlFor='color'>Color: </label>
            <input id='color'
                   className='NewBoxForm-input'
                   name='color'
                   type='text' 
                   placeholder='Color'
                   onChange={handleChange}
                   value={formData.color} 
            />
            <label htmlFor='width'>Width: </label>
            <input id='width'
                   className='NewBoxForm-input'
                   name='width'
                   type='text' 
                   placeholder='width (in pixels)'
                   onChange={handleChange}
                   value={formData.width} 
            />
            <label htmlFor='height'>Height: </label>
            <input id='height'
                   className='NewBoxForm-input'
                   name='height'
                   type='text' 
                   placeholder='height (in pixels)'
                   onChange={handleChange}
                   value={formData.height} 
            />
            <button className='NewBoxForm-btn' onClick={handleSubmit}>Make a Box!</button>
        </form>
    )
}

export default NewBoxForm;