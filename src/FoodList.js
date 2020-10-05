import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';

function FoodList(props) {
  return (
    <Paper>
      <List>
        {props.bestFood.map((best) => (
            <>
          <ListItem>
              <ListItemText>{best.food}</ListItemText>
          </ListItem>
          <Divider/>
          </>
        ))}
      </List>
    </Paper>
  );
}
export default FoodList;
