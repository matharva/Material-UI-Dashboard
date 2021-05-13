import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SubjectIcon from "@material-ui/icons/Subject";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory, useLocation } from "react-router";

const drawerWidth = 240;

const menuItems = [
  {
    text: "My Notes",
    icon: <SubjectIcon color="secondary" />,
    path: "/",
  },
  {
    text: "Create a note",
    icon: <AddCircleOutlineIcon color="secondary" />,
    path: "/create",
  },
];

const useStyles = makeStyles({
  page: {
    backgroundColor: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
  active: {
    backgroundColor: "#f4f4f4",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  return (
    <div className={classes.root}>
      {/* App bar */}

      {/* Side Drawer */}
      <Drawer
        variant="permanent"
        className={classes.drawer}
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <Typography variant="h5">Ninja Notes</Typography>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
