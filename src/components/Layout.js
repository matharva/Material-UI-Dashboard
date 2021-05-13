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
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { format } from "date-fns";
import Avatar from "@material-ui/core/Avatar";

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

// TO make use of the default theme values,
// we have converted makeStyles into a function
// which returns the object with the added values

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
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
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  return (
    <div className={classes.root}>
      {/* App bar */}
      <AppBar
        elevation={0}
        className={classes.appBar}
        position="fixed"
        color="primary"
      >
        <Toolbar>
          <Typography className={classes.date}>
            Today is {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar src="/mario-av.png" className={classes.avatar}></Avatar>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        variant="permanent"
        className={classes.drawer}
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <Typography variant="h5" className={classes.title}>
          Ninja Notes
        </Typography>

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

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
