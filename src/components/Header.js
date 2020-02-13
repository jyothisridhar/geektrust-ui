import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexgrow: 1
  },
  title: {
    flexgrow: 1,
    margin: 'auto'
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root} m={2}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
            Finding Falcone!
            </Typography>
            <Button color="inherit">Reset</Button>
          </Toolbar>
        </AppBar>
    </div>
  );
}

export default Header;
