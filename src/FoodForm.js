import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/Textfield';
import useInputState from './hooks/useInputState';

function FoodForm({ addFood }) {
    const [value, handleChange, reset] = useInputState('');
return (
    <Paper>
        <form onSubmit={(e) => {
            e.preventDefault();
            addFood(value);
            reset();
        }}>
           <TextField value={value} onChange={handleChange}/>
        </form> 
    </Paper>
)
}
export default FoodForm;