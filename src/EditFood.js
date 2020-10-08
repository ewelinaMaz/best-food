import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/Textfield';

function EditFood({editFood, id, food, toggleEdit}) {
   const [value, handleChange, reset] = useInputState(food);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            editFood(id, value);
            reset();
            toggleEdit();
        }}>
        <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth/>
        </form>
    );
}
export default EditFood;