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

const ShacksList = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
      <ListItem button selected>
        <ListItemIcon>
          <HouseIcon style={{ color: "red" }} />
        </ListItemIcon>
        <ListItemText primary="Mayo" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <HouseIcon style={{ color: "green" }} />
        </ListItemIcon>
        <ListItemText primary="Mestiza" />
      </ListItem>
    </List>
  );
};

export default ShacksList;
