import React, { useEffect } from "react";
import useFoodState from "./hooks/useFoodState";
import FoodList from "./FoodList";
import FoodForm from "./FoodForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

function FoodApp() {
  const initialFood = JSON.parse(window.localStorage.getItem("bestFood") || "[]")
  const {bestFood, addFood, removeFood, toggleFavourite, editFood} = useFoodState(initialFood);

  useEffect(() => {
      window.localStorage.setItem("bestFood", JSON.stringify(bestFood))
  }, [bestFood] );
  
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
