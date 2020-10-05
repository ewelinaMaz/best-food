import React, { useState } from "react";
import FoodList from './FoodList';
import FoodForm from './FoodForm';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

function FoodApp() {
    const initialFood = [
        {id: 1, food: 'burgers', favourite: true},
        {id: 2, food: 'pizza', favourite: true},
        {id: 3, food: 'spagetti', favourite: true},
    ];
    const [bestFood, setBestFood] =  useState(initialFood);
    const addFood = newFoodText => {
        setBestFood([...bestFood, {id: 4, food: newFoodText, favourite: true}]);
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
        <AppBar
        color='primary'
        position='static'
        style={{height: "64px"}}
        >
            <Toolbar>
                <Typography color='inherit'>Best food ever</Typography>
            </Toolbar>
        </AppBar>
        <FoodForm addFood={addFood}/>
        <FoodList bestFood={bestFood} />
    </Paper>
  );
}
export default FoodApp;
