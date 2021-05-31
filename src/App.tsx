import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./App.css";
import Main from "./Components/main"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    testButton: {
      color: "white",
      fontWeight: "bold"
    }
  })
);

function App() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="fixed" className="header-color">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              MD
            </Typography>
            <Button className={classes.testButton} href="#aboutinfo">About Me</Button>
            <Button className={classes.testButton} href="#skillsinfo">Skills</Button>
            <Button className={classes.testButton} href="#workinfo">Work Info</Button>
            <Button className={classes.testButton} href="#contactinfo">Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
      <div className="content">
        <Main/>
      </div>
    </div>
  );
}

export default App;