import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";

import { List, ListItem } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard"
  },
  {
    name: "Add Asset",
    path: "/dashboard/assets/add_asset"
  },
  {
    name: "Add Category",
    path: "/dashboard/categories/add"
  },
  {
    name: "Delete Category",
    path: "/dashboard/categories/delete"
  },
  {
    name: "Dispose Asset",
    path: "/dashboard/assets/dispose"
  },
  {
    name: "Generate Report",
    path: "/dashboard/generate_report"
  },
  {
    name: "Users",
    path: "/dashboard/users"
  }
];

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => setState(false)}
      onKeyDown={() => setState(false)}
    >
      <List>
        {routes.map(content => (
          <Link to={content.path} key={content.name}>
            <ListItem button>{content.name}</ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Akira
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={state} onClose={() => setState(false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
