import React from "react";
import useToggle from "./hooks/useToggle";
import EditFood from "./EditFood";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";


function FoodChange({ food, favourite, removeFood, id, toggleFavourite, editFood }) {
  const [isEditing, toggle] = useToggle(false);
  return (
    <ListItem>
      {isEditing ? (
        <EditFood 
        editFood={editFood} 
        id={id} 
        food={food} 
        toggleEdit={toggle}/>
      ) : (
        <>
          <ListItemText>{food}</ListItemText>
          <Checkbox
            checked={favourite}
            tabIndex={-1}
            onClick={() => toggleFavourite(id)}
          />
          <IconButton aria-label="Delete" onClick={() => removeFood(id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Edit" onClick={toggle}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </ListItem>
  );
}
export default FoodChange;
