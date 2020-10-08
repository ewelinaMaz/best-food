import React, { useState } from "react";
import FoodList from "./FoodList";
import FoodForm from "./FoodForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { v4 as uuidv4 } from 'uuid';

function FoodApp() {
  const initialFood = [
    { id: 1, food: "burgers", favourite: true },
    { id: 2, food: "pizza", favourite: true },
    { id: 3, food: "spagetti", favourite: true },
  ];
  const [bestFood, setBestFood] = useState(initialFood);
  const addFood = (newFoodText) => {
    setBestFood([...bestFood, { id: uuidv4(), food: newFoodText, favourite: true }]);
  };
  const removeFood = (foodId) => {
    const updatedFood = bestFood.filter((food) => food.id !== foodId);
    setBestFood(updatedFood);
  };
  const toggleFavourite = (foodId) => {
    const updatedFood = bestFood.map(food => 
        food.id === foodId ? {...food, favourite: !food.favourite } :
        food
  );
  setBestFood(updatedFood)
}
const editFood = (foodId, newFood) => {
    const updatedFood = bestFood.map(best => 
        best.id === foodId ? {...best, food: newFood } :
        best
    );
    setBestFood(updatedFood);
}
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Best food ever</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <FoodForm addFood={addFood} />
          <FoodList 
          bestFood={bestFood} 
          removeFood={removeFood}
          toggleFavourite={toggleFavourite}
          editFood={editFood}/>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default FoodApp;
