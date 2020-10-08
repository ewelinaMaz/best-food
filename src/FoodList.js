import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import FoodChange from "./FoodChange";

function FoodList({ bestFood, removeFood, editFood, toggleFavourite}) {
  return (
    <Paper>
      <List>
        {bestFood.map((best) => (
            <>
                  <FoodChange 
                  removeFood={removeFood} 
                  food={best.food} 
                  id={best.id}
                  key={best.id} 
                  favourite={best.favourite}
                  toggleFavourite={toggleFavourite}
                  editFood= {editFood}/>
          <Divider/>
          </>
        ))}
      </List>
    </Paper>
  );
}
export default FoodList;
