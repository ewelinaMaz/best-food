import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/Textfield';
import useInputState from './hooks/useInputState';

function FoodForm({ addFood }) {
    const [value, handleChange, reset] = useInputState('');
return (
    <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
        <form onSubmit={(e) => {
            e.preventDefault();
            addFood(value);
            reset();
        }}>
           <TextField 
           value={value} 
           onChange={handleChange}
           margin="normal"
           label="Add new food"
           fullWidth
           />
        </form> 
    </Paper>
)
}
export default FoodForm;