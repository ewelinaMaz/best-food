import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import FoodChange from "./FoodChange";

function FoodList({ bestFood, removeFood, editFood, toggleFavourite}) {
  return (
    bestFood.length ?
    <Paper>
      <List>
        {bestFood.map((best, i) => (
            <>
                  <FoodChange 
                  removeFood={removeFood} 
                  {...best}
                  key={best.id}
                  toggleFavourite={toggleFavourite}
                  editFood= {editFood}/>
                  {i < bestFood.length - 1 && <Divider/>}
         
          </>
        ))}
      </List>
    </Paper> : null
  );
}
export default FoodList;
