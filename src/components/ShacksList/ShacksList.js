import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HouseIcon from "@material-ui/icons/House";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const ShacksList = ({ data, selected, onItemClick }) => {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Cabañas
        </ListSubheader>
      }
      className={classes.root}
    >
      {data.map((shack) => (
        <ListItem
          onClick={() => onItemClick(shack)}
          button
          key={shack.id}
          selected={selected === shack.id}
        >
          <ListItemIcon>
            <HouseIcon style={{ color: shack.color }} />
          </ListItemIcon>
          <ListItemText primary={shack.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default ShacksList;
