import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
//import ListIconSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function FoodChange({food, favourite, removeFood, id}) {
    return (
        <ListItem>
              <ListItemText>
                  {food}
              </ListItemText>
              <Checkbox checked={favourite} tabIndex={-1}/>
              <IconButton aria-label="Delete" onClick={() => removeFood(id)}>
                  <DeleteIcon/>
              </IconButton>
              <IconButton aria-label="Edit">
                  <EditIcon/>
              </IconButton>
          </ListItem>    
    )
}
export default FoodChange;